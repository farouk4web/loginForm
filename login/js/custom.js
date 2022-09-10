/*global $, jQuery, alert, console,*/
/*jslint browser: true*/
/*eslint browser: false*/

$(document).ready(function () {
    "use strict";
    
    $(".loginWindow").height($(window).height());
    
    $(window).on("resize", function () {
        $(".loginWindow").height($(window).height());
    });
    
    $("form").slideDown(2000);
    
    $("input").last().on("click", function (e) {
        e.preventDefault();
        alert("sorry we cant send any data to the database because we dont have a DATABASE just smile (*_*)");
    });
    
    
});