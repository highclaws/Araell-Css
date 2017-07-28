$(document).ready(function() {
    $("#1").click(function() {
        debugger
        $("#test1").show();
        $("#test2").hide();
        $("#test3").hide();
        $("#test4").hide();
        $("#test5").hide();
        console.log("c'est good");
    });
    $("#2").click(function() {
        $("#test2").show();
        $("#test1").hide();
        $("#test3").hide();
        $("#test4").hide();
        $("#test5").hide();
        console.log("ça passe");
    });
    $("#3").click(function() {
        $("#test3").show();
        $("#test1").hide();
        $("#test2").hide();
        $("#test4").hide();
        $("#test5").hide();

    });
    $("#4").click(function() {
        $("#test4").show();
        $("#test1").hide();
        $("#test2").hide();
        $("#test3").hide();
        $("#test5").hide();

    });
    $("#5").click(function() {
        $("#test5").show();
        $("#test1").hide();
        $("#test2").hide();
        $("#test3").hide();
        $("#test4").hide();
    });
});