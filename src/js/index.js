const genBtn = document.querySelector(".color-get .btn-gen");
const bgSect = document.querySelector(".bg-default");

genBtn.addEventListener("click", () => {
  const colorCode = "#" + Math.round(Math.random() * 0xffffff).toString(16);
  const colorCode2 = "#" + Math.round(Math.random() * 0xffffff).toString(16);
  bgSect.style.background = `linear-gradient(45deg, ${colorCode}, ${colorCode2})`;
});

console.log(colorCode);
