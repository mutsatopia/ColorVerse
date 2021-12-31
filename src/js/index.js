//btn-gen 클릭시 
const genBtn = document.querySelector(".color-get .btn-gen");
const bgChange = document.querySelector(".bg-color");

const main = document.querySelector("main");
const bottomBox = document.querySelector(".bottom-box");

genBtn.addEventListener("click", () => {
  bgChange.classList.add('changed');
  main.classList.remove("hide");
  bottomBox.classList.remove("hide");

  const artRec = document.querySelector('.art-rec');
  artRec.scrollIntoView({ behavior: "smooth", block: "end"});
});

// bottom-box 안에 floating 효과
function floatingObject(selector) {
  gsap.to(selector, 1, {
    y: 15,
    repeat: -1,
    yoyo: true,
    ease: Power1.easeInOut
  });
}
floatingObject('.floating');