/**
 * Created by ejimenezdelgado on 14/06/2015.
 */

var proxy = require("./../lib/proxy");

//By name

proxy().html(
    {
        name: "proxysite-USA",
        url: "https://www.youtube.com/watch?v=yftHosO0eUo"
    },
    function (html) {
        "use strict";
        console.log(html);
    });