/**
 * Created by ejimenezdelgado on 13/06/2015.
 */

var Browser = require("zombie");
var configuration = require("./../config.js");

module.exports = function () {
    "use strict";

    var userAgent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_3) AppleWebKit/535.20 (KHTML, like Gecko) Chrome/19.0.1036.7 Safari/535.20';
    var browser = new Browser({userAgent: userAgent, runScripts: true, debug: true, waitFor: 5000});
    var startTime = +new Date();

    function hostRandom(callback) {
        var proxies = [];
        Object.keys(configuration.proxy).forEach(function (i) {
            proxies.push(configuration.proxy[i]);
        });
        var random = Math.floor((Math.random() * proxies.length) + 1);
        return callback(proxies[random - 1].host);
    }

    function hostRandomLocalization(localization, callback) {
        var proxies = [];
        Object.keys(configuration.proxy).forEach(function (i) {
            if (configuration.proxy[i].host.localization == localization) {
                proxies.push(configuration.proxy[i]);
            }
        });
        var random = Math.floor((Math.random() * proxies.length) + 1);
        return callback(proxies[random - 1].host);
    }

    function hostName(name, callback) {
        Object.keys(configuration.proxy).forEach(function (i) {
            if (configuration.proxy[i].host.name == name) {
                return callback(configuration.proxy[i].host);
            }
        });
    }

    function getHost(parameters, callback) {
        if (parameters.name) {
            hostName(parameters.name, function (host) {
                return callback(host);
            });
        }
        else {
            if (parameters.random) {
                if (parameters.localization) {
                    hostRandomLocalization(parameters.localization, function (host) {
                        return callback(host);
                    });
                }
                else {
                    hostRandom(function (host) {
                        return callback(host);
                    });
                }
            }
        }
    }

    return {
        //Get html information
        html: function html(parameters, callback) {
            getHost(parameters, function (host) {
                var html = "";
                browser.visit(host.url, function () {
                    browser.fill(host.input, parameters.url).
                        pressButton(host.button, function () {
                            var duration;
                            html = browser.html();
                            duration = (+(new Date())) - startTime;
                            console.log("Finished in (milliseconds): " + duration);
                            return callback(html);
                        });
                });
            });
        }
    }
};