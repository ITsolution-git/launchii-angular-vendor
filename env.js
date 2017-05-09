(function(window) {
    'use strict';

    window.__env = window.__env || {};

    // API url
    window.__env.apiUrl = 'https://api.launchii.com/v1';
    
    if(( location.href.indexOf("stagingvendor") != -1) || (location.href.indexOf("localhost") != -1)){
    	window.__env.apiUrl = 'https://stageapi.launchii.com/v1';	
    }
    
    // Base url
    //window.__env.baseUrl = '/';

    // Whether or not to enable debug mode
    // Setting this to false will disable console output
    window.__env.enableDebug = true;
})(this);