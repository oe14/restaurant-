export default function loadHome(){



	const content = document.getElementById("content");
	content.innerHTML = "";

	const home = document.createElement("div");
	home.innerHTML = "<h1> this is home man!!! </h1>";

content.append(home);

}
