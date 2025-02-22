import img from "../img/Le-tajine.jpg";

// document.body.style.backgroundImage = `url(${img})`;
export default function loadHome() {
    const content = document.getElementById("content")
        content.innerHTML = "";

    const home = document.createElement("div");
    home.classList.add("home");


    const hero = document.createElement("div");
    hero.classList.add("hero");

    const heading = document.createElement("h1");
    heading.textContent = "Welcome to Andalus Moroccan Cuisine";
    heading.setAttribute("id", "homeHeader");

    const tagline = document.createElement("h3");
    tagline.textContent = "A Taste of Morocco in Every Bite.";
    tagline.setAttribute("id", "tagline");

    const heroImage = document.createElement("img");
    heroImage.src = img;
    heroImage.alt = "A beautifully decorated Moroccan restaurant interior with lanterns and intricate tilework.";
    heroImage.classList.add("hero-image");

    hero.appendChild(heading);
    hero.appendChild(tagline);
    hero.appendChild(heroImage);

    const descriptionContainer = document.createElement("div");
    descriptionContainer.classList.add("description");

    const description = document.createElement("p");
    description.textContent = 
        "Join us for a journey through Morocco’s bustling souks, tranquil riads, and the heartwarming hospitality of its people – all through the power of taste.";
       

    descriptionContainer.appendChild(description);
 

    description.setAttribute("class", "txt");

    const ctaContainer = document.createElement("div");
    ctaContainer.classList.add("cta");

   




    home.appendChild(hero);
    home.appendChild(descriptionContainer);
    home.appendChild(ctaContainer);

    content.appendChild(home);
}
