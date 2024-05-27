// GSAP
gsap.registerPlugin(ScrollTrigger);
let mm = gsap.matchMedia();

//  Projects on the homepage
let horizontalSection = document.querySelector('#featured-projects');

// use gsap on winndow screen, not mobile
mm.add("(min-width: 1150px)", () => {
    gsap.to('#featured-projects', {
    x: () => horizontalSection.scrollWidth * -1,
    xPercent: 100,
    scrollTrigger: {
        trigger: '#featured-projects',
        start: 'center center',
        end: '+=3400px',
        pin: '#projects',
        scrub: true,
        invalidateOnRefresh: true
    }
    });
});

// Fade in class
let revealContainers = document.querySelectorAll(".gsap-fade-in");

// Add gsap animation on fade-in classes
revealContainers.forEach((container) => {
  let image = container.querySelector("img");
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: container,
      toggleActions: "restart none none reset",
      once: true
    }
  });

  tl.set(container, { autoAlpha: 1 });
  tl.from(container, 0.8, {
    yPercent: 100,
    ease: Power2.out
  });
  tl.from(image, 0.8, {
    yPercent: -100,
    delay: -0.8,
    ease: Power2.out
  });

  // Check if the animation is finished
  tl.eventCallback("onComplete", () => {
    container.classList.add("animation");
  });
});