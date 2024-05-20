const data = [
  { place: 1, name: "Steven A" },
  { place: 2, name: "Raghav M" },
  { place: 3, name: "Ryan Z" },
  { place: 4, name: "Joseph R" },
  { place: 5, name: "Muwaffaq I" },
  { place: 6, name: "Joshua L" },
  { place: 7, name: "Nick M" },
  { place: 8, name: "Ravindra R" },
  { place: 9, name: "Ricardo M" },
  { place: 10, name: "Shubham R" },
  { place: 11, name: "Flavio S" },
  { place: 12, name: "Igor S" },
  { place: 13, name: "Mycah H" },
  { place: 14, name: "hemant d" },
  { place: 15, name: "Santhosh S" },
  { place: 16, name: "Joseph D" },
  { place: 17, name: "Kevin C" },
  { place: 18, name: "yasser m" },
  { place: 19, name: "Miguel Ángel M" },
  { place: 20, name: "Peter K" },
  { place: 21, name: "Atikur R" },
  { place: 22, name: "Matthew Y" },
  { place: 23, name: "Anwar S" },
  { place: 24, name: "Jake Y" },
  { place: 25, name: "Lokesh R" },
  { place: 26, name: "Christopher P" },
  { place: 27, name: "Mingxin O" },
  { place: 28, name: "August E" },
  { place: 29, name: "Samsruti D" },
  { place: 30, name: "Harsh V" },
  { place: 31, name: "Keenan P" },
  { place: 32, name: "Rouz A" },
  { place: 33, name: "Ron R" },
  { place: 34, name: "Sean O" },
  { place: 35, name: "Michael D" },
  { place: 36, name: "Devishree R" },
  { place: 37, name: "Ali R" },
  { place: 38, name: "Alvin A" },
  { place: 39, name: "Arthur N" },
  { place: 40, name: "Choulhyouc L" },
  { place: 41, name: "Zeeshan H" },
  { place: 42, name: "Goran Đ" },
  { place: 43, name: "sovannarong k" },
  { place: 44, name: "Luke M" },
  { place: 45, name: "Chenzhe X" },
  { place: 46, name: "Jae Hee L" },
  { place: 47, name: "Jason P" },
  { place: 48, name: "Sebastiano D" },
  { place: 49, name: "Julia S" },
  { place: 50, name: "Sana" },
];
const nav = document.querySelector(".nav"),
  searchIcon = document.querySelector("#searchIcon"),
  navOpenBtn = document.querySelector(".navOpenBtn"),
  navCloseBtn = document.querySelector(".navCloseBtn"),
  searchResult = document.getElementById("searchResult"),
  resultContainer = document.querySelector(".searching_results");

searchResult.addEventListener("input", () => {
  if (searchResult.value.length === 0) {
    resultContainer.style.display = "none";
  }
  if (nav.classList.contains("openSearch") && searchResult.value.length > 0) {
    resultContainer.style.display = "flex";
    let result = data.filter((item) =>
      item.name.toLowerCase().includes(searchResult.value.toLowerCase())
    );
    resultContainer.innerHTML = "";

    result.forEach((item, index) => {
      const div = document.createElement("div");
      const p = document.createElement("p");
      const span = document.createElement("span");
      p.textContent = item.name;
      span.textContent = item.place;
      div.appendChild(p);
      div.appendChild(span);
      resultContainer.appendChild(div);
    });
  }
});

const toggleButton = document.getElementById("theme-toggle");
const body = document.body;

searchIcon.addEventListener("click", () => {
  nav.classList.toggle("openSearch");
  nav.classList.remove("openNav");
  if (searchResult.value.length === 0) {
    resultContainer.style.display = "none";
  }
  if (nav.classList.contains("openSearch")) {
    return searchIcon.classList.replace("uil-search", "uil-times");
  }
  searchIcon.classList.replace("uil-times", "uil-search");
});

// page start with dark mode

body.classList.add("dark-mode");
// Toggle between "toggle off and toggle on"//

toggleButton.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  body.classList.toggle("light-mode");

  if (body.classList.contains("light-mode")) {
    toggleButton.classList.remove("bi-toggle-off");
    toggleButton.classList.add("bi-toggle-on");
    document.getElementById("menuBarsColor").style.color = "black";
    document.querySelectorAll("a").forEach((link)=>link.style.color = "black");
    } else {
    toggleButton.classList.remove("bi-toggle-on");
    toggleButton.classList.add("bi-toggle-off");
    document.getElementById("menuBarsColor").style.color = "white";
    document.querySelectorAll("a").forEach((link)=>link.style.color = "white");
  }
});

navOpenBtn.addEventListener("click", () => {
  nav.classList.add("openNav");
  nav.classList.remove("openSearch");
  searchIcon.classList.replace("uil-times", "uil-search");
});
navCloseBtn.addEventListener("click", () => {
  nav.classList.remove("openNav");
});

document.addEventListener("DOMContentLoaded", function () {
  const discordButton = document.getElementById("discord-button");
  const discordPopup = document.getElementById("discord-popup");
  const closeBtn = document.getElementById("close-btn");

  discordButton.addEventListener("click", function () {
    discordPopup.style.display = "block";
  });

  closeBtn.addEventListener("click", function () {
    discordPopup.remove();
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const discordPopup = document.getElementById("discord-popup");
  const closeBtn = document.getElementById("close-btn");

  discordButton.addEventListener("click", function () {
    discordPopup.style.display = "block";
  });

  closeBtn.addEventListener("click", function () {
    discordPopup.style.display = "none";
  });
});
const success = () => {
  showAlert("You have successfully subscribed!", "success");
};

const showAlert = (message, type) => {
  const alertBox = document.getElementById("customAlert");
  const alertText = document.getElementById("alertText");

  alertText.textContent = message;

  if (type === "success") {
    alertBox.style.borderColor = "#4CAF50";
    alertText.style.color = "#4CAF50";
  } else {
    alertBox.style.borderColor = "#f44336";
    alertText.style.color = "#f44336";
  }

  alertBox.classList.add("show");

  document.getElementById("closeAlert").addEventListener("click", () => {
    alertBox.classList.remove("show");
  });
};

const subscriptionForm = document.getElementById("subscriptionForm");
const emailInput = document.getElementById("emailInput");

subscriptionForm.addEventListener("submit", function (event) {
  if (!emailInput.checkValidity()) {
    showAlert("Please enter a valid email address.", "error");
    emailInput.focus();
    event.preventDefault();
  } else {
    success();
  }
});