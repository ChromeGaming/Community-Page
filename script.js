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
    discordPopup.remove();
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
const success = () => {
  showAlert('You have successfully subscribed!', 'success');
}

const showAlert = (message, type) => {
  const alertBox = document.getElementById('customAlert');
  const alertText = document.getElementById('alertText');

  alertText.textContent = message;

  if (type === 'success') {
      alertBox.style.borderColor = '#4CAF50';
      alertText.style.color = '#4CAF50';
  } else {
      alertBox.style.borderColor = '#f44336';
      alertText.style.color = '#f44336';
  }

  alertBox.classList.add('show');

  document.getElementById('closeAlert').addEventListener('click', () => {
      alertBox.classList.remove('show');
  });
}

const subscriptionForm = document.getElementById('subscriptionForm');
const emailInput = document.getElementById('emailInput');

subscriptionForm.addEventListener('submit', function(event) {
  if (!emailInput.checkValidity()) {
      showAlert('Please enter a valid email address.', 'error');
      emailInput.focus();
      event.preventDefault();
  } else {
      success();
  }
});
