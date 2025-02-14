export default function loadContact(){



	const content = document.getElementById("content");
	content.innerHTML = "";

	const contact = document.createElement("div");
	contact.innerHTML = "<h1> contact me dude!!!!</h1>";

content.append(contact);

}
