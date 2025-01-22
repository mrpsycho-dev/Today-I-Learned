"use strict";

const factForm = document.querySelector(".fact-form");
const shareAFact = document.querySelector(".share");

shareAFact.addEventListener("click", function () {
  if (factForm.classList.contains("hidden")) {
    shareAFact.textContent = "Close";
    factForm.classList.remove("hidden");
  } else {
    shareAFact.textContent = "Share a fact";
    factForm.classList.add("hidden");
  }
});
