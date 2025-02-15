import './style.css';
import image from "./img/andalus-moroccan-cuisine (1).jpg"
import loadContact from "./modules/contact";
import loadMenu from "./modules/menu";
import loadHome from "./modules/home";




const home = document.getElementById('home-btn');

const menu = document.getElementById('menu-btn');

const contact = document.getElementById('contact-btn');

const content = document.getElementById("content");


home.addEventListener("click", loadHome)

menu.addEventListener("click", loadMenu)

contact.addEventListener("click", loadContact); 