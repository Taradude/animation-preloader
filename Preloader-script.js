const slides = document.querySelectorAll(".preloader .slide");
const preloader = document.querySelector(".preloader");
const text = new SplitType(".brand");
const textChars = document.querySelectorAll(".brand .char");
gsap.set(textChars, {
  opacity: 0,
});

const preloaderTl = gsap.timeline({
  onComplete: () => {
    gsap.to(textChars, {
      opacity: 1,
      stagger: 0.025,
      duration: 0.4,
    });

    gsap.to(preloader, {
      yPercent: "-100",
      duration: 1.2,
      delay: 1,
    });
  },
});

slides.forEach((slide) => {
  preloaderTl.fromTo(slide, { opacity: 0 }, { opacity: 1, duration: 0.4 });
});

preloaderTl.play();
