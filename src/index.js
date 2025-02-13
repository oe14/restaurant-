import './style.css';

console.log('Webpack is working!');
const home = document.getElementById('home-btn');

const menu = document.getElementById('menu-btn');

const contact = document.getElementById('contact-btn');

const content = document.getElementById("content");


home.addEventListener("click", function(){
content.innerHTML = "hello";

})

menu.addEventListener("click", function(){

alert("hello world")

})

contact.addEventListener("click", function(){

alert("hello world")

})