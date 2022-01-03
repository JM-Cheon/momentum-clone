const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginBtn = document.querySelector("#login-form button");
const loginBtnIcon = document.querySelector("#login-form button > i");
const greeting = document.querySelector("#greeting");
const todoForm = document.querySelector("#todo-form");
const todoList = document.querySelector("#todo-list");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginBtnSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  loginForm.classList.add(HIDDEN_CLASSNAME);
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.innerText = `Wellcome ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  todoForm.classList.remove(HIDDEN_CLASSNAME);
  todoList.classList.remove(HIDDEN_CLASSNAME);
}

function onLoginBtnMouseover() {
  loginBtnIcon.classList.remove("fa-lock");
  loginBtnIcon.classList.add("fa-unlock");
}

function onLoginBtnMouseout() {
  loginBtnIcon.classList.remove("fa-unlock");
  loginBtnIcon.classList.add("fa-lock");
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  // show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginBtnSubmit);
} else {
  // show the greeting
  paintGreetings(savedUsername);
}

loginBtn.addEventListener("mouseover", onLoginBtnMouseover);
loginBtn.addEventListener("mouseout", onLoginBtnMouseout);
