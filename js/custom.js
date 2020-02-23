$(function(){
    $('.hr1').click(function(){
    $('.hr1').css("background","red");
    $('.hr2').css("background","white");
    $('.hr3').css("background","white");
    $('.clientt').hide();
    $('.clienttt').hide();
    $('.client').fadeIn();
    });
});
$(function(){
    $('.hr2').click(function(){
    $('.hr2').css("background","red");
    $('.hr1').css("background","white");
    $('.hr3').css("background","white");
    $('.client').hide();
    $('.clienttt').hide();
    $('.clientt').fadeIn();
    
    });
});
$(function(){
    $('.hr3').click(function(){
    $('.hr3').css("background","red");
    $('.hr2').css("background","white");
    $('.hr1').css("background","white");
    $('.client').hide();
    $('.clientt').hide();
    $('.clienttt').fadeIn();
    });
});
var slideIndex = 0;
    
carousel();

function carousel() {
var i;
var x = document.getElementsByClassName("client");
for (i = 0; i < x.length; i++) {
x[i].style.display = "none"; 
}
slideIndex++;
if (slideIndex > x.length) {slideIndex = 1} 
x[slideIndex-1].style.display = "block"; 
setTimeout(carousel, 2000); 
}
