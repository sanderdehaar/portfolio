// SR reveal animations

function srRevealAnimations() {
    window.sr = ScrollReveal({ reset: false });

    sr.reveal('header', {
        origin: 'top',
        distance: '80px',
        duration: 600,
        opacity: 0,
        delay: 0,
        scale: 1
    });

    sr.reveal('.left-container h1', {
        origin: 'bottom',
        distance: '25px',
        duration: 600,
        opacity: 0,
        delay: 300,
        scale: 1
    });

    sr.reveal('.left-container p', {
        origin: 'bottom',
        distance: '25px',
        duration: 600,
        opacity: 0,
        delay: 400,
        scale: 1
    });

    sr.reveal('.buttons button', {
        origin: 'bottom',
        distance: '25px',
        duration: 600,
        opacity: 0,
        delay: 600,
        scale: 1
    });

    sr.reveal('main .bottom i', {
        origin: 'bottom',
        distance: '15px',
        duration: 600,
        opacity: 0,
        delay: 400,
        scale: 1
    });

    sr.reveal('main .bottom', {
        origin: 'bottom',
        distance: '20px',
        duration: 600,
        opacity: 0,
        delay: 700,
        scale: 1
    });

    sr.reveal('.photo', {
        origin: 'right',
        distance: '25px',
        duration: 600,
        opacity: 0,
        delay: 800
    });

    sr.reveal('.line', {
        origin: 'top',
        distance: '20px',
        duration: 600,
        opacity: 0,
        delay: 900
    });

    sr.reveal('.circle-overlay', {
        origin: 'bottom',
        distance: '0px',
        duration: 600,
        opacity: 0,
        delay: 1200,
        scale: 1
    });

    sr.reveal('.text-overlay h2', {
        origin: 'bottom',
        distance: '20px',
        duration: 600,
        opacity: 0,
        delay: 1000
    });
}

// Back to top button
var btn = document.getElementById('back-to-top');

// Check where you are on the page and show the button if its above 270px
window.addEventListener('scroll', function() {
  if (window.scrollY > 270) {
    btn.classList.add('show');
  } else {
    btn.classList.remove('show');
  }
});


// Toggle menu

const menuBar = document.getElementsByClassName("menu")[0];
const menuClose = document.querySelector(".close-menu");
const navigationLinks = document.querySelectorAll('#menu nav a');
const menu = document.getElementById("menu");
const body = document.body;

// Toggle the menu and disable the body scroll
function toggleMenu() {
    menu.classList.toggle('is-active');
    body.classList.toggle('disable-scroll');
}

// Icon toggles
[menuBar, menuClose].forEach(item => item.addEventListener("click", toggleMenu));
// The menu closes when pressed on a link
navigationLinks.forEach(link => link.addEventListener('click', toggleMenu));

// This will check if you clicked next to the menu, so the menu toggles (closes)
menu.addEventListener("click", (event) => {
    if (event.target !== menu) return;
    toggleMenu();
});


// // Project selecting

// if (window.innerWidth > 1150) {
//     function logTranslateX() {
//         const container = document.querySelector(".project-container");
//         const computedStyle = window.getComputedStyle(container);
//         const matrixString = computedStyle.transform || computedStyle.webkitTransform;
//         const match = matrixString.match(/^matrix\((.+)\)$/);
//         let projectIndex = 0;

//         if (match) {
//             const matrixValues = match[1].split(', ');
//             const translateXValue = parseFloat(matrixValues[4]);
//             const currentMin = Math.min(logTranslateX.min || translateXValue, translateXValue);
//             logTranslateX.min = Math.min(currentMin, -1075);

//             const percentage = (translateXValue / currentMin) * 100;

//             if (percentage > 95) {
//                 projectIndex = 5;
//             } else if (percentage > 80) {
//                 projectIndex = 4;
//             } else if (percentage > 60) {
//                 projectIndex = 3;
//             } else if (percentage > 40) {
//                 projectIndex = 2;
//             } else if (percentage > 20) {
//                 projectIndex = 1;
//             } else {
//                 projectIndex = 0;
//             }

//             const projects = document.querySelectorAll('.project');
//             projects.forEach(project => project.classList.remove('is-active'));

//             if (projectIndex < projects.length) {
//                 projects[projectIndex].classList.add('is-active');
//             }
//         }
//     }

//     document.addEventListener("scroll", logTranslateX);
// }