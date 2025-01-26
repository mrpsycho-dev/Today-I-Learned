"use strict";

const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

const factForm = document.querySelector(".fact-form");
const shareAFact = document.querySelector(".share");
const factList = document.querySelector(".fact-list");

factList.innerHTML = "";
// loadFacts();
// createFactsList(initialFacts);

// async function loadFacts() {
//   const res = await fetch(
//     "https://fshnehqkbmfnicqighsu.supabase.co/rest/v1/facts",
//     {
//       headers: {
//         apikey:
//           "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZzaG5laHFrYm1mbmljcWlnaHN1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc4MzQxMDIsImV4cCI6MjA1MzQxMDEwMn0.-ib2qr7lFdzzedjBBose9Bu2uS0MJ3TfcNp9cUecFCM",
//         authorization:
//           "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZzaG5laHFrYm1mbmljcWlnaHN1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc4MzQxMDIsImV4cCI6MjA1MzQxMDEwMn0.-ib2qr7lFdzzedjBBose9Bu2uS0MJ3TfcNp9cUecFCM",
//       },
//     }
//   );
//   const data = await res.json();
//   createFactsList(data);
// }

shareAFact.addEventListener("click", function () {
  if (factForm.classList.contains("hidden")) {
    shareAFact.textContent = "Close";
    factForm.classList.remove("hidden");
  } else {
    shareAFact.textContent = "Share a fact";
    factForm.classList.add("hidden");
  }
});

function createFactsList(dataArr) {
  const htmlArr = dataArr.map(
    (fact) => `<li class = "fact"><p>${fact.text}
    <a class="source" href="${fact.source}">(Source)</a>
    </p>
    <span class="tag" style="background-color: ${
      CATEGORIES.find((cat) => cat.name === `${fact.category}`).color
    }">${fact.category}</span>
    
    </li>`
  );
  const html = htmlArr.join("");
  factList.insertAdjacentHTML("afterbegin", html);
}
