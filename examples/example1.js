/**
 * Created by ejimenezdelgado on 14/06/2015.
 */

var proxy = require("./../lib/proxy");

//Random

proxy().html(
    {
        random: true,
        url: "https://www.youtube.com/watch?v=RFinNxS5KN4"
    },
    function (html) {
        "use strict";

        console.log(html);

    });