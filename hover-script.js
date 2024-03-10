const Hoverslides = document.querySelector(".section-marketing .slides");

Hoverslides.addEventListener("mouseenter", () => {
  document.querySelector(
    ".section-marketing .slides .slide-right"
  ).style.width = "80%";

  const elementsToColor = document.querySelectorAll(
    ".section-marketing .slides .slide-right p, .section-marketing .slides .slide-right h1"
  );

  elementsToColor.forEach((element) => {
    element.style.color = "white";
  });
  const elementsToColorLeft = document.querySelectorAll(
    ".section-marketing .slides .slide-left p, .section-marketing .slides .slide-left h1"
  );

  elementsToColorLeft.forEach((element) => {
    element.style.opacity = 0.6;
  });
});

Hoverslides.addEventListener("mouseleave", () => {
  document.querySelector(
    ".section-marketing .slides .slide-right"
  ).style.width = "";

  const elementsToColor = document.querySelectorAll(
    ".section-marketing .slides .slide-right p, .section-marketing .slides .slide-right h1"
  );

  elementsToColor.forEach((element) => {
    element.style.color = "grey";
  });
  const elementsToColorLeft = document.querySelectorAll(
    ".section-marketing .slides .slide-left p, .section-marketing .slides .slide-left h1"
  );

  elementsToColorLeft.forEach((element) => {
    element.style.opacity = 1;
  });
});
