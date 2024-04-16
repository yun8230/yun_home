fetch("html/elements/home/profile-content.html")
	.then((response) => response.text())
	.then((data) =>
		document
			.querySelector("#profile-content")
			.insertAdjacentHTML("afterbegin", data)
	);
