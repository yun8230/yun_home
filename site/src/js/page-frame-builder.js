fetch("../page-frames/head.html")
	.then((response) => response.text())
	.then((data) =>
		document.querySelector("head").insertAdjacentHTML("beforeend", data)
	);

fetch("../page-frames/header.html")
	.then((response) => response.text())
	.then((data) =>
		document.querySelector("body").insertAdjacentHTML("afterbegin", data)
	);

fetch("../page-frames/background.html")
	.then((response) => response.text())
	.then((data) =>
		document.querySelector("body").insertAdjacentHTML("afterbegin", data)
	);

fetch("../page-frames/footer.html")
	.then((response) => response.text())
	.then((data) =>
		document.querySelector("body").insertAdjacentHTML("beforeend", data)
	);
