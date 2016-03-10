var imgURL = chrome.extension.getURL("img/soren.png");
var host = window.document.location.hostname;

$('body').append('<div class="zombiepind" style="position:fixed; bottom:0px; z-index:10;"><img id="zombiebillede" src="http://i.imgur.com/cWuWl5O.png"/></div>');
function pindLeft() {
    $(".zombiepind").animate({left: "-=500"}, 2000, "swing", pindRight);
}
function pindRight() {
    $(".zombiepind").animate({left: "+=500"}, 2000, "swing", pindLeft);
}
pindRight();
$('.zombiepind').prepend("<div class='triangle-isosceles'>HVAD LAVER DU?</div>");

$(function () {

    var text = [
        'HVAD LAVER DU?',
        'Jeg holder øje med dig.',
        'Er du måske terrorist?',
        'Hvad er det dog, du kigger på?',
        'Dit besøg er registreret.',
        'Hmmmm... ' + host + '. Det er hermed noteret.',
        'Lige nu er der ' + (Math.floor(Math.random() * 10000)) + ' danskere på ' + host + '! Hvad laver I?'
    ];
    var time = setInterval(function () {
        var newText = text[Math.floor(Math.random() * text.length)];
        $('.triangle-isosceles').text(newText);
    }, 3000);

});
document.getElementById("zombiebillede").src = imgURL