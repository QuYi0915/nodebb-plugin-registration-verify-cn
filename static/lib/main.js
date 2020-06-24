"use strict";
/*global utils, app*/

$(function () {
    $(window).on('action:ajaxify.end', function (err, data) {
        if (data.tpl_url === 'register') {
            $.get("/api/verify-code-refresh", function (res) {
                $("#verifcCode").attr("src", res.dataURL);
            });
        }
    });
});