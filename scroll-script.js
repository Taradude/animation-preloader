const h1SplitOrange = new SplitType(".section-orange .bottom h1");
const h1SplitLeads = new SplitType(".section-leads .top h1");
const h1SplitMarketing = new SplitType(".section-marketing h1");
const h1OrangeChars = document.querySelectorAll(
  ".section-orange .bottom .char"
);
const h1LeadChars = document.querySelectorAll(".section-leads .top h1 .char");
const h1MarketingChars = document.querySelectorAll(
  ".section-marketing .top h1 .char"
);
const allCols = document.querySelectorAll(".section-leads .col");
const allRows = document.querySelectorAll(".section-rows .row");
gsap.set(allCols, {
  scaleY: 0,
});
gsap.set(allRows, {
  scaleX: 0,
});
gsap.set(".section-marketing hr", {
  width: 0,
});

gsap.set(
  [
    h1OrangeChars,
    h1LeadChars,
    h1MarketingChars,
    ".row span",
    ".section-marketing .top h2",
    ".section-marketing .bottom p",
    ".section-leads h3",
  ],
  {
    opacity: 0,
  }
);

const orangeSectionScroll = gsap
  .timeline({
    scrollTrigger: {
      trigger: ".section-orange",
      start: "top-=20%",
      end: "bottom+=20% ",
    },
  })
  .to(h1OrangeChars, {
    opacity: 1,
    stagger: 0.05,
    duration: 0.2,
  });

const leadsSectionScroll = gsap
  .timeline({
    scrollTrigger: {
      trigger: ".section-leads",
      start: "top-=20%",
      end: "bottom+=20% ",
    },
  })
  .to(h1LeadChars, {
    opacity: 1,
    stagger: 0.025,
    duration: 0.2,
  })
  .to(".section-leads h3", {
    opacity: 1,
  })
  .to(
    allCols,
    {
      scaleY: 1,
    },
    "<"
  );

const rowSectionScroll = gsap
  .timeline({
    scrollTrigger: {
      trigger: ".section-rows",
      start: "top-=40%",
      end: "bottom+=20% ",
    },
  })
  .to(allRows, {
    scaleX: 1,
    ease: "power4.out",
    duration: 1.5,
  })
  .to(
    ".section-marketing hr",
    {
      width: "100%",
    },
    "<"
  )
  .to(
    ".row span",
    {
      opacity: 1,
      duration: 2.5,
    },
    "<"
  );

const marketingSectionScroll = gsap
  .timeline({
    scrollTrigger: {
      trigger: ".section-marketing",
      start: "top-=20%",
      end: "bottom+=40%",
    },
  })
  .to(h1MarketingChars, {
    opacity: 1,
    stagger: 0.025,
    duration: 0.2,
  })
  .to(".section-marketing .top h2", {
    opacity: 1,
    duration: 1,
  })
  .to(
    ".section-marketing .bottom p",
    {
      opacity: 1,
      duration: 1,
    },
    "<"
  );
