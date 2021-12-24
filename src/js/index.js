

const genBtn = document.querySelector(".color-get .btn-gen");
const main = document.querySelector("main");

	genBtn.addEventListener("click", () => {
    const colorCode = "#" + Math.round( Math.random() * 0xFFFFFF ).toString(16);
    const colorCode2 = "#" + Math.round( Math.random() * 0xFFFFFF ).toString(16);
    main.style.background = `linear-gradient(45deg, ${colorCode}, ${colorCode2})`
});

console.log(colorCode);