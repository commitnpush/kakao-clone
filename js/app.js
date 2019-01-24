$(document).ready(function(){
    var $actionBtn = $("#actionBtn");
    var $iconBtn = $("#actionBtn .fa");
    var $lockBtn = $("#lockBtn");
    $actionBtn.click(function(){
        $iconBtn.toggleClass("fa-times fa-comment");
        $lockBtn.toggleClass("showing-btn");
    });

})