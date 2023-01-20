"use strict";
console.log("hello");
const slides = document.querySelectorAll(".slide");
console.log(slides);

slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});
let counter = 0;
const goPrev = () => {
  counter--;
  slideImage();
};
const goNext = () => {
  counter++;
  slideImage();
};

const slideImage = () => {
  slides.forEach(
    (slide) => (slide.style.transform = `translateX(-${(counter % 4) * 100}%)`)
  );
};

// #FIXME time
setInterval(goNext, 5000);

//smooth scrolling
const about = document.querySelector("#found");
document.querySelector("#about").addEventListener("click", function (e) {
  e.preventDefault();
  console.log("hello");
  about.scrollIntoView({ behavior: "smooth" });
});

const joinUs = document.querySelector("#video");
document.querySelector("#join").addEventListener("click", function (e) {
  e.preventDefault();
  joinUs.scrollIntoView({ behavior: "smooth" });
});

//sticky navbar
const imageContainer = document.querySelector(".image_container");
const nav = document.querySelector("nav");

const stickyNav = function (entries) {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
};

const imageContainerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: "-90px",
});

imageContainerObserver.observe(imageContainer);
