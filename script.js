var card1_click = -1;
var card2_click = -1;
var card3_click = -1;
var card4_click = -1;
var card5_click = -1;
var card6_click = -1;
var card7_click = -1;
var card8_click = -1;
var card9_click = -1;
var card10_click = -1;
var card11_click = -1;
var card12_click= -1;

$(".card1").click(function(){
    $(".card1").html("VAMPIRE");
    card1_click++;

    if(card1_click != 0){
        $(".card1").html("ROLE ALREADY TAKEN");
        $(".card1").attr("disabled", true);
    }
});


$(".card2").click(function(){
    $(".card2").html("VAMPIRE");
    card2_click++;

    if(card2_click != 0){
        $(".card2").html("ROLE ALREADY TAKEN");
        $(".card2").attr("disabled", true);
    }
});


$(".card3").click(function(){
    $(".card3").html("VILLAGER");
    card3_click++;

    if(card3_click != 0){
        $(".card3").html("ROLE ALREADY TAKEN");
        $(".card3").attr("disabled", true);
    }
});


$(".card4").click(function(){
    $(".card4").html("VILLAGER");
    card4_click++;

    if(card4_click != 0){
        $(".card4").html("ROLE ALREADY TAKEN");
        $(".card4").attr("disabled", true);
    }
});


$(".card5").click(function(){
    $(".card5").html("VILLAGER");
    card5_click++;

    if(card5_click != 0){
        $(".card5").html("ROLE ALREADY TAKEN");
        $(".card5").attr("disabled", true);
    }
});


$(".card6").click(function(){
    $(".card6").html("DOCTOR");
    card6_click++;

    if(card6_click != 0){
        $(".card6").html("ROLE ALREADY TAKEN");
        $(".card6").attr("disabled", true);
    }
});


$(".card7").click(function(){
    $(".card7").html("VILLAGER");
    card7_click++;

    if(card7_click != 0){
        $(".card7").html("ROLE ALREADY TAKEN");
        $(".card7").attr("disabled", true);
    }
});


$(".card8").click(function(){
    $(".card8").html("DETECTIVE");
    card8_click++;

    if(card8_click != 0){
        $(".card8").html("ROLE ALREADY TAKEN");
        $(".card8").attr("disabled", true);
    }
});


$(".card9").click(function(){
    $(".card9").html("VILLAGER");
    card9_click++;

    if(card9_click != 0){
        $(".card9").html("ROLE ALREADY TAKEN");
        $(".card9").attr("disabled", true);
    }
});


$(".card10").click(function(){
    $(".card10").html("VILLAGER");
    card10_click++;

    if(card10_click != 0){
        $(".card10").html("ROLE ALREADY TAKEN");
        $(".card10").attr("disabled", true);
    }
});


$(".card11").click(function(){
    $(".card11").html("VILLAGER");
    card11_click++;

    if(card11_click != 0){
        $(".card11").html("ROLE ALREADY TAKEN");
        $(".card11").attr("disabled", true);
    }
});


$(".card12").click(function(){
    $(".card12").html("VILLAGER");
    card12_click++;

    if(card12_click != 0){
        $(".card12").html("ROLE ALREADY TAKEN");
        $(".card12").attr("disabled", true);
    }
});

