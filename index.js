var express = require('express'),
    app = express();

app.use(express.static(__dirname));

app.get('/', function(req, res) {
    res.sendfile('index.html', { root: __dirname })
});

app.get('/service-token', function(req, res) {
    var googleAPI = require('googleapis');
    var client_email = process.env.ga_client_email;
    var private_key = process.env.ga_private_key;
    var jwtClient = new googleAPI.auth.JWT(client_email, null, private_key, ['https://www.googleapis.com/auth/analytics.readonly'], null);
    var oauth2Client = new googleAPI.auth.OAuth2();

    jwtClient.authorize(function(err, result) {
        if (err) {
            res.send('');
            return;
        }

        res.send(result.access_token);
    });
});

var server = app.listen(process.env.PORT || 8080);
