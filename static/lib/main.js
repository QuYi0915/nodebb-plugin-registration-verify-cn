"use strict";
/*global utils, app*/

$(function () {
    $(window).on('action:ajaxify.end', function (err, data) {
        $("#verifcCode").on("click", function () {
            $.get("/api/verify-code-refresh", function (res) {
                $("#verifcCode").attr("src", res.dataURL);
            });
        })
    });
});