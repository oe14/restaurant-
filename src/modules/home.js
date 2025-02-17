
import img from "../img/andalus-moroccan-cuisine (1).jpg";
export default function loadHome() {
    const content = document.getElementById("content");
    content.innerHTML = "";

    const home = document.createElement("div");
    home.classList.add("home");

    const heading = document.createElement("h1");
    heading.textContent = "Welcome to Andalus Moroccan Cuisine";

 heading.setAttribute("id", "homeHeader");
    const tagline = document.createElement("h3");
    tagline.textContent = "A Taste of Morocco in Every Bite.";
    tagline.setAttribute("id", "tagline");

    const description = document.createElement("p");
    description.textContent = 
        "Indulge in the rich traditions of Moroccan gastronomy, where every dish tells a story of spices, culture, and centuries-old culinary artistry. " +
        "From the sizzling aroma of freshly grilled kebabs to the comforting warmth of slow-cooked tagines, we bring the vibrant flavors of Morocco straight to your plate.";

    const image = document.createElement("img");
    image.src = img;
    image.alt = "A beautifully decorated Moroccan restaurant interior with lanterns and intricate tilework.";

    const welcomeMessage = document.createElement("p");
    welcomeMessage.textContent =
        "Join us for a journey through Morocco’s bustling souks, tranquil riads, and the heartwarming hospitality of its people – all through the power of taste.";


    
    home.appendChild(heading);
    home.appendChild(tagline);
    home.appendChild(description);
    home.appendChild(image);
    home.appendChild(welcomeMessage);

    content.appendChild(home);
}
