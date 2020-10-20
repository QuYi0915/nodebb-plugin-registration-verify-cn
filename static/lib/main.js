"use strict";
/*global utils, app*/

$(function () {
    function refresh(){
        $.get("/api/verify-code-refresh", function (res) {
            $("#verifcCode").attr("src", res.dataURL);
        });
    };
    $(window).on('action:ajaxify.end', function (err, data) {
        if (data.tpl_url === 'register') {
            refresh();
        };
        $("#verifcCode").on("click", refresh);
    });
});
