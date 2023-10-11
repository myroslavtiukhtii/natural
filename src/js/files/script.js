// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";


//scroll trigger

gsap.from(".hero__text__title", {
    scrollTrigger: ".hero__text__title", 
    y: 15,
    opacity: 0
});

let revealContainers = document.querySelectorAll(".reveal");

revealContainers.forEach((container) => {
  let image = container.querySelector("img");
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: container,
      toggleActions: "restart none none reset"
    }
  });

  tl.set(container, { autoAlpha: 1 });
  tl.from(container, 1.5, {
    xPercent: -100,
    ease: Power2.out
  });
  tl.from(image, 1.5, {
    xPercent: 100,
    scale: 1.1,
    delay: -1.5,
    ease: Power2.out
  });
});

gsap.from(".slider__text__title", {
    y: 15,
    opacity: 0,
    duration: 1.5,
    scrollTrigger: {
      trigger: ".slider__text__title",
      start: "top center",
      end: "top bottom",
      scrub: 1,
      markers: false,
      id: "scrub"
    }
});

gsap.from(".slider__text__subtitle", {
    y: 15,
    opacity: 0,
    duration: 1.5,
    scrollTrigger: {
        trigger: ".slider__text__subtitle",
        start: "top center",
        end: "top bottom",
        scrub: 1,
        markers: false,
        id: "scrub"
    }
});

gsap.from(".reviews__image", {
    y: 15,
    opacity: 0,
    duration: 1.5,
    scrollTrigger: {
        trigger: ".reviews__image",
        start: "top center",
        end: "top bottom",
        scrub: 1,
        markers: false,
        id: "scrub"
    }
});

gsap.from(".reviews__title", {
    y: 15,
    opacity: 0,
    duration: 1.5,
    scrollTrigger: {
        trigger: ".reviews__title",
        start: "top center",
        end: "top bottom",
        scrub: 1,
        markers: false,
        id: "scrub"
    }
});

gsap.from(".discount__title", {
    y: 15,
    opacity: 0,
    duration: 1.5,
    scrollTrigger: {
        trigger: ".discount__title",
        start: "top center",
        end: "top bottom",
        scrub: 1,
        markers: false,
        id: "scrub"
    }
});

gsap.from(".discount__subtitle", {
    y: 15,
    opacity: 0,
    duration: 1.5,
    scrollTrigger: {
        trigger: ".discount__subtitle",
        start: "top center",
        end: "top bottom",
        scrub: 1,
        markers: false,
        id: "scrub"
    }
});

gsap.from(".subscribe__title", {
    y: 15,
    opacity: 0,
    duration: 1.5,
    scrollTrigger: {
        trigger: ".subscribe__title",
        start: "top center",
        end: "top bottom",
        scrub: 1,
        markers: false,
        id: "scrub"
    }
});