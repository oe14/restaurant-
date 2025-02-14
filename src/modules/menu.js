export default function loadMenu(){



	const content = document.getElementById("content");
	content.innerHTML = "";

	const menu = document.createElement("div");
	menu.innerHTML = "<h1>this is the menu</h1>";

content.append(menu);

}
