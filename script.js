"use strict";

const btnSubmit = document.querySelector(".btn-submit");
const raitingContainer = document.querySelector(".raiting-container");
const thanksContainer = document.querySelector(".thank-you-container");
const rating = document.querySelector(".rating");
const rates = document.querySelectorAll(".btn");

btnSubmit.addEventListener("click", function () {
  raitingContainer.classList.add("hidden");
  thanksContainer.classList.remove("hidden");
});

rates.forEach((score) => {
  score.addEventListener("click", function () {
    rating.textContent = score.innerHTML;
  });
});
