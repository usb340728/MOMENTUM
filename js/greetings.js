const loginForm = document.querySelector('#loginform')
const loginInput = document.querySelector('#loginform input')
const loginBtn = document.querySelector('#loginform button')
const greeting = document.querySelector('#greeting')
const USERNAME_KEY = "username"
const HIDDEN_CLASSNAME = "hidden"

function onLoginSubmit(event){
  event.preventDefault()
  loginForm.classList.add(HIDDEN_CLASSNAME)
  const inputUsername = loginInput.value
  localStorage.setItem(USERNAME_KEY,inputUsername)
  paintGreeting(inputUsername)
}

function paintGreeting(username){
  greeting.innerText = `hello ${username}`
  greeting.classList.remove(HIDDEN_CLASSNAME)
}

const savedUsername = localStorage.getItem(USERNAME_KEY)

if(savedUsername === null){
  loginForm.classList.remove(HIDDEN_CLASSNAME)
  loginForm.addEventListener('submit',onLoginSubmit)
}else{
  paintGreeting(savedUsername)
}