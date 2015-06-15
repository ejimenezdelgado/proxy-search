/**
 * Created by ejimenezdelgado on 14/06/2015.
 */

var proxy = require("./../lib/proxy");

//By random localization

proxy().html(
    {
        random: true,
        localization: "USA",
        url: "https://kat.cr/blackhat-2015-bdrip-720p-x264-ac3-english-latino-urbin4hd-eng-spa-subs-t10599713.html"
    },
    function (html) {
        "use strict";
        console.log(html);
    });