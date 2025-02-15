import image from "../img/andalus-moroccan-cuisine (1).jpg";

export default function loadHome(){



	const content = document.getElementById("content");
	content.innerHTML = "";

	const home = document.createElement("div");
	home.innerHTML = "<h1> this is home man!!! </h1>";

const imgElement = document.createElement("img"); 
imgElement.src = image; 

content.append(imgElement)




content.append(home);

}
