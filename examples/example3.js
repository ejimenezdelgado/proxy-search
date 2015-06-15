/**
 * Created by ejimenezdelgado on 14/06/2015.
 */

var proxy = require("./../lib/proxy");

//By random localization

proxy().html(
    {
        random: true,
        localization: "USA",
        url: "https://www.youtube.com/watch?v=xe1LrMqURuw"
    },
    function (html) {
        "use strict";
        console.log(html);
    });