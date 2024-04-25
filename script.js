const nav = document.querySelector(".nav"),
  searchIcon = document.querySelector("#searchIcon"),
  navOpenBtn = document.querySelector(".navOpenBtn"),
  navCloseBtn = document.querySelector(".navCloseBtn");

searchIcon.addEventListener("click", () => {
  nav.classList.toggle("openSearch");
  nav.classList.remove("openNav");
  if (nav.classList.contains("openSearch")) {
    return searchIcon.classList.replace("uil-search", "uil-times");
  }
  searchIcon.classList.replace("uil-times", "uil-search");
});

navOpenBtn.addEventListener("click", () => {
  nav.classList.add("openNav");
  nav.classList.remove("openSearch");
  searchIcon.classList.replace("uil-times", "uil-search");
});
navCloseBtn.addEventListener("click", () => {
  nav.classList.remove("openNav");
});


document.addEventListener("DOMContentLoaded", function() {
  const discordButton = document.getElementById('discord-button');
  const discordPopup = document.getElementById('discord-popup');
  const closeBtn = document.getElementById('close-btn');

  discordButton.addEventListener('click', function() {
    discordPopup.style.display = 'block';
  });

  closeBtn.addEventListener('click', function() {
    discordPopup.style.display = 'none';
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const discordPopup = document.getElementById('discord-popup');
  const closeBtn = document.getElementById('close-btn');

  discordButton.addEventListener('click', function() {
    discordPopup.style.display = 'block';
  });

  closeBtn.addEventListener('click', function() {
    discordPopup.style.display = 'none';
  });
});
