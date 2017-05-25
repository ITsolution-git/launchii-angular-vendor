var express = require('express'),
    app = express();

app.use(express.static(__dirname));

app.get('/', function(req, res) {
    res.sendfile('index.html', { root: __dirname })
});

app.get('/ga-reporting-data', function(req, res) {
    var vendorId = req.query.vendor;
    var reportType = req.query.type || 'basic';
    var viewID = process.env.ga_view_id;

    var googleAPI = require('googleapis');
    var client_email = process.env.ga_client_email;
    var private_key = process.env.ga_private_key;
    var jwtClient = new googleAPI.auth.JWT(client_email, null, private_key, ['https://www.googleapis.com/auth/analytics.readonly'], null);
    var oauth2Client = new googleAPI.auth.OAuth2();

    jwtClient.authorize(function(err, result) {
        if (err) {
            res.send(JSON.stringify({error: 'Unauthorized'}));
            return;
        }

        oauth2Client.setCredentials({
            access_token: result.access_token
        });

        var analytics = googleAPI.analyticsreporting('v4');
        googleAPI.options({ auth: oauth2Client });

        var req = null;

        if (reportType === 'traffic') {

            req = {
                reportRequests: [
                    {
                        viewId: viewID,
                        dateRanges: [
                            {
                                startDate: '30daysAgo',
                                endDate: 'yesterday',
                            }
                        ],
                        metrics: [
                            { expression: 'ga:totalEvents' }
                        ],
                        dimensions: [
                            { name: 'ga:channelGrouping' }
                        ],
                        filtersExpression: 'ga:dimension4==' + vendorId + ';ga:eventLabel==Deal - Pageview',
                        samplingLevel: 'LARGE'
                    }
                ]
            };

        } else if (reportType === 'deal-views-country') {

            req = {
                reportRequests: [
                    {
                        viewId: viewID,
                        dateRanges: [
                            {
                                startDate: '30daysAgo',
                                endDate: 'yesterday',
                            }
                        ],
                        metrics: [
                            { expression: 'ga:metric1' }
                        ],
                        dimensions: [
                            { name: 'ga:city' }
                        ],
                        filtersExpression: 'ga:city!=(not set);ga:country==United States;ga:dimension4==' + vendorId,
                        orderBys: [
                            {
                                fieldName: 'ga:metric1',
                                sortOrder: 'DESCENDING'
                            }
                        ],
                        samplingLevel: 'LARGE'
                    }
                ]
            };

        } else if (reportType === 'events') {

            req = {
                reportRequests: [
                    {
                        viewId: viewID,
                        dateRanges: [
                            {
                                startDate: '30daysAgo',
                                endDate: 'yesterday',
                            }
                        ],
                        metrics: [
                            { expression: 'ga:totalEvents' }
                        ],
                        dimensions: [
                            { name: 'ga:eventAction' },
                            { name: 'ga:dimension3' }
                        ],
                        filtersExpression: 'ga:dimension4==' + vendorId + ';ga:eventLabel=~(Deal \\- Pageview|Upsell \\- Accept Offer|Deal \\- Get Coupon)',
                        samplingLevel: 'LARGE',
                        pivots: [
                            {
                                dimensions: [ { name: 'ga:eventLabel' } ],
                                metrics: [ { expression: 'ga:totalEvents' } ]
                            }
                        ]
                    }
                ]
            };

        } else {

            req = {
                reportRequests: [
                    {
                        viewId: viewID,
                        dateRanges: [
                            {
                                startDate: '30daysAgo',
                                endDate: 'yesterday',
                            }
                        ],
                        metrics: [
                            { expression: 'ga:users' },
                            { expression: 'ga:sessions' },
                            { expression: 'ga:avgSessionDuration' },
                            { expression: 'ga:goal1Completions' },
                            { expression: 'ga:goal2Completions' }
                        ],
                        dimensions: [
                            { name: 'ga:date' }
                        ],
                        filtersExpression: 'ga:dimension4==' + vendorId,
                        samplingLevel: 'LARGE'
                    }
                ]
            };

        }

        var request = {
            'headers': { 'Content-Type': 'application/json' },
            'auth': oauth2Client,
            'resource': req
        };

        //Request data to GA API
        analytics.reports.batchGet(
            request,
            function (err, response) {
                if (err) {
                    console.log(err);
                    var errMsg = 'Something went wrong.';
                    if (err && err.errors && err.errors[0] && err.errors[0].message) {
                        errMsg = err.errors[0].message;
                    }
                    res.send(JSON.stringify({error: errMsg}));
                } else {
                    res.send(JSON.stringify(response));
                }
            }
        );
    });
});

var server = app.listen(process.env.PORT || 8080);
