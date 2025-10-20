const signupLink = document.getElementById("signupLink");
const loginLink = document.getElementById("loginLink");
const container = document.querySelector(".container");

const loginForm = document.getElementById("loginForm");
const usernameInput = document.getElementById("username");
const welcomeBox = document.getElementById("welcomeBox");
const displayName = document.getElementById("displayName");
gi
signupLink.addEventListener("click", (e) => {
  e.preventDefault();
  container.classList.add("active");
});

loginLink.addEventListener("click", (e) => {
  e.preventDefault();
  container.classList.remove("active");
});

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = usernameInput.value.trim();
  if (name) {
    displayName.textContent = name;
    welcomeBox.classList.add("show");
    loginForm.parentElement.style.display = "none";
    document.querySelector(".signup").style.display = "none";
  }
});
