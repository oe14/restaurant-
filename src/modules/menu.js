export default function loadMenu() {
    const content = document.getElementById("content");
    content.innerHTML = "";

    const menu = document.createElement("div");
    menu.classList.add("menu");

    const heading = document.createElement("h1");
    heading.textContent = "Our Exquisite Moroccan Menu";

    const tagline = document.createElement("p");
    tagline.textContent = "Each dish is crafted with love, authenticity, and the finest ingredients to bring the heart of Morocco to your table.";

    const dishes = [
        {
            name: "🍲 Tagine",
            desc: "A slow-cooked, aromatic stew with tender lamb, chicken, or vegetables, infused with saffron, cumin, and preserved lemons.",
        },
        {
            name: "🥘 Couscous Royale",
            desc: "A festive dish of steamed semolina grains served with a variety of meats, vegetables, and a flavorful broth.",
        },
        {
            name: "🍛 Harira Soup",
            desc: "A rich, hearty soup made with tomatoes, lentils, chickpeas, and fragrant spices – a traditional Moroccan comfort dish.",
        },
        {
            name: "🥐 Pastilla",
            desc: "A delicate sweet-and-savory pie filled with spiced shredded chicken, almonds, cinnamon, and dusted with powdered sugar.",
        },
        {
            name: "🍢 Moroccan Kebabs",
            desc: "Grilled skewers of marinated lamb or chicken, served with fresh herbs and traditional dipping sauces.",
        },
        {
            name: "🍹 Mint Tea & Pastries",
            desc: "Refreshing Moroccan mint tea paired with delicate pastries like baklava and chebakia – a perfect end to your meal.",
        },
    ];

    const dishList = document.createElement("div");
    dishList.classList.add("dish-list");

    dishes.forEach(dish => {
        const dishDiv = document.createElement("div");
        dishDiv.classList.add("menu-item");

        const dishName = document.createElement("h2");
        dishName.textContent = dish.name;

        const dishDesc = document.createElement("p");
        dishDesc.textContent = dish.desc;

        dishDiv.appendChild(dishName);
        dishDiv.appendChild(dishDesc);
        dishList.appendChild(dishDiv);
    });

    menu.appendChild(heading);
    menu.appendChild(tagline);
    menu.appendChild(dishList);

    content.appendChild(menu);
}
