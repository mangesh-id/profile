// particles animation 

// $(document).ready(function () {
//     var count_particles, stats, update;
//     stats = new Stats;
//     stats.setMode(0);
//     stats.domElement.style.position = 'absolute';
//     stats.domElement.style.left = '0px';
//     stats.domElement.style.top = '0px';
//     document.body.appendChild(stats.domElement);
//     count_particles = document.querySelector('.js-count-particles');
//     update = function () {
//         stats.begin();
//         stats.end();
//         if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
//             count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
//         }
//         requestAnimationFrame(update);
//     };
//     requestAnimationFrame(update);


// });

// navbar when scrolling

// $(window).scroll(function () {
//     if ($(this).scrollTop() > 0) {
//         $('.navbar').addClass('nav-sticky');
//     } else {
//         $('.navbar').removeClass('nav-sticky');
//     }
// });
window.onscroll = function() {scrollFunction()};
 function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("navbarNav").style.padding = "0px";
        document.getElementsByClassName("nav-link").style.color = "black";

        // document.getElementById("global-nav").style.lineHeight = "0";
        // document.getElementById("global-nav").style.backgroundColor = "white";
    }
    else {
        document.getElementById("navbarNav").style.padding = "15px 0px";
        document.getElementById("navbarNav").style.transition = "0.5s";
        // document.getElementById("global-nav").style.backgroundColor = "white";
        // document.getElementById("global-nav").style.Color = "black";
        
        // document.getElementById("global-nav").style.lineHeight = "4";
    }
}



// typewriter effect 

// const typedTextSpan = document.querySelector(".typed-text");
// const cursorSpan = document.querySelector(".cursor");

// const textArray = ["hard", "fun", "a journey", "LIFE"];
// const typingDelay = 200;
// const erasingDelay = 100;
// const newTextDelay = 2000; // Delay between current and next text
// let textArrayIndex = 0;
// let charIndex = 0;

// function type() {
//     if (charIndex < textArray[textArrayIndex].length) {
//         if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
//         typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
//         charIndex++;
//         setTimeout(type, typingDelay);
//     }
//     else {
//         cursorSpan.classList.remove("typing");
//         setTimeout(erase, newTextDelay);
//     }
// }

// function erase() {
//     if (charIndex > 0) {
//         if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
//         typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
//         charIndex--;
//         setTimeout(erase, erasingDelay);
//     }
//     else {
//         cursorSpan.classList.remove("typing");
//         textArrayIndex++;
//         if (textArrayIndex >= textArray.length) textArrayIndex = 0;
//         setTimeout(type, typingDelay + 1100);
//     }
// }

// document.addEventListener("DOMContentLoaded", function () { // On DOM Load initiate the effect
//     if (textArray.length) setTimeout(type, newTextDelay + 250);
// });