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

console.log(CATEGORIES.find((cat) => cat.name === "science").color);

const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];

const factForm = document.querySelector(".fact-form");
const shareAFact = document.querySelector(".share");
const factList = document.querySelector(".fact-list");

factList.innerHTML = "";
// loadFacts();
createFactsList(initialFacts);

async function loadFacts() {
  const res = await fetch(
    "https://fshnehqkbmfnicqighsu.supabase.co/rest/v1/facts",
    {
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZzaG5laHFrYm1mbmljcWlnaHN1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc4MzQxMDIsImV4cCI6MjA1MzQxMDEwMn0.-ib2qr7lFdzzedjBBose9Bu2uS0MJ3TfcNp9cUecFCM",
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZzaG5laHFrYm1mbmljcWlnaHN1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc4MzQxMDIsImV4cCI6MjA1MzQxMDEwMn0.-ib2qr7lFdzzedjBBose9Bu2uS0MJ3TfcNp9cUecFCM",
      },
    }
  );
  const data = await res.json();
  createFactsList(data);
}

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
  // console.log(htmlArr);
  factList.insertAdjacentHTML("afterbegin", html);
}
