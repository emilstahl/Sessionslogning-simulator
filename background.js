var imgURL = chrome.extension.getURL("img/soren.png");

$('body').append('<div class="zombiepind" style="position:fixed; bottom:0px; z-index:10;"><img id="zombiebillede" src="http://i.imgur.com/cWuWl5O.png"/></div>');
function pindLeft() {
    $(".zombiepind").animate({left: "-=500"}, 2000, "swing", pindRight);
}
function pindRight() {
    $(".zombiepind").animate({left: "+=500"}, 2000, "swing", pindLeft);
}
pindRight();
$('.zombiepind').prepend("<div class='triangle-isosceles'>HVAD LAVER DU?</div>");

$(function() {

   var text = ['HVAD LAVER DU?', 'Jeg holder øje med dig.', 'Er du måske terrorist?', 'Hvad er det dog, du kigger på?', 'Dit besøg er registreret.'];
   var time = setInterval(function() {
       var newText = text[Math.floor(Math.random()*text.length)];
       $('.triangle-isosceles').text(newText);
   },1000);

});
document.getElementById("zombiebillede").src = imgURL;
