"use strict";

const rangeSpacing = document.querySelector("[data-spacing='0']");
const rangeBlur = document.querySelector("[data-blur='0']");
const rangeBaseColor = document.querySelector("[data-baseColor='0']");
const inputs = document.querySelectorAll("input");
const image = document.querySelector(".image");
const js = document.querySelector(".js");

inputs.forEach((input) => {
  console.log(input.value);
  input.oninput = () => {
    if (input === rangeSpacing)
      return (image.style.padding = `${input.value}px`);
    else if (input === rangeBlur)
      return (image.style.filter = `blur(${input.value}px)`);
    else {
      js.style.color = `${input.value}`;
      image.style.backgroundColor = `${input.value}`;
    }
  };
});
