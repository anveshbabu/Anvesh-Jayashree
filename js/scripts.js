/*!
* Start Bootstrap - Freelancer v7.0.4 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 72,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});


function makeTimer() {

    //		var endTime = new Date("29 April 2018 9:56:00 GMT+01:00");	
    var endTime = new Date("11-14-2021");
    endTime = (Date.parse(endTime) / 1000);

    var now = new Date();
    now = (Date.parse(now) / 1000);

    var timeLeft = endTime - now;

    var days = Math.floor(timeLeft / 86400);
    var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
    var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
    var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

    if (hours < "10") { hours = "0" + hours; }
    if (minutes < "10") { minutes = "0" + minutes; }
    if (seconds < "10") { seconds = "0" + seconds; }
    document.getElementById("days").innerHTML = `<div class="timer days" id="days"> ${days}</div> <div class="title">${days != '1' ? 'Days' : 'Day'}</div> `;
    document.getElementById("fdays").innerHTML = `<div class="timer days" id="days"> ${days}</div> <div class="title">${days != '1' ? 'Days' : 'Day'}</div> `;
    document.getElementById("hours").innerHTML = `<div class="timer days" id="days"> ${hours}</div> <div class="title">Hours</div> `;
    document.getElementById("fhours").innerHTML = `<div class="timer days" id="days"> ${hours}</div> <div class="title">Hours</div> `;
    document.getElementById("minutes").innerHTML = `<div class="timer days" id="days"> ${minutes}</div> <div class="title d-none d-sm-none d-md-block">Minutes</div><div class="title d-sm-block d-md-none">Mins</div> `;
    document.getElementById("fminutes").innerHTML = `<div class="timer days" id="days"> ${minutes}</div> <div class="title d-none d-sm-none d-md-block">Minutes</div><div class="title d-sm-block d-md-none">Mins</div> `;
    document.getElementById("seconds").innerHTML = `<div class="timer days" id="days"> ${seconds}</div> <div class="title d-none d-sm-none d-md-block">Seconds</div><div class="title d-sm-block d-md-none">Secs</div> `;
    document.getElementById("fseconds").innerHTML = `<div class="timer days" id="days"> ${seconds}</div> <div class="title d-none d-sm-none d-md-block">Seconds</div><div class="title d-sm-block d-md-none">Secs</div> `;
    // $("#days").html(days);
    // $("#hours").html(hours);
    // $("#minutes").html(minutes);
    // $("#seconds").html(seconds);		

}

setInterval(function () { makeTimer(); }, 1000);

var isPlaying = false;

myAudio.onplaying = function () {
    isPlaying = true;
    document.getElementById("audioIcone").innerHTML = '<i class="fas fa-volume-up">'

};
myAudio.onpause = function () {
    isPlaying = false;
    document.getElementById("audioIcone").innerHTML = '<i class="fas fa-volume-mute"> '
};
function togglePlay() {
    isPlaying ? myAudio.pause() : myAudio.play();



};
function getLocalStream() {
    navigator.mediaDevices.getUserMedia({ video: false, audio: true }).then(stream => {
        togglePlay();
    }).catch(err => {
        console.log("u got an error:" + err)
    });

}
getLocalStream()
