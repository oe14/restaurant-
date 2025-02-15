import './style.css';
import loadContact from "./modules/contact";
import loadMenu from "./modules/menu";
import loadHome from "./modules/home";


loadHome();

const home = document.getElementById('home-btn');

const menu = document.getElementById('menu-btn');

const contact = document.getElementById('contact-btn');

const content = document.getElementById("content");


home.addEventListener("click", loadHome)

menu.addEventListener("click", loadMenu)

contact.addEventListener("click", loadContact); 