$(function () {
    'user strict' ;
    //Adjust Slider Height

    var winH =$(window).height(),
    upperH  =$('upper-bar').innerHeight(),
    navH    =$('navbar').innerHeight();
    $('slider').height (winH -(upperH + navH));
});