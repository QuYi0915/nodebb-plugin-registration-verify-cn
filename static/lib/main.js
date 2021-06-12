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
            $('#register').html('已备注用户名并支付30元，立即注册');
            $('#register').click(function(){document.getElementsByTagName("html")[0].scrollTop=0});
            refresh();
        };
        $("#verifcCode").on("click", refresh);
    });
});
