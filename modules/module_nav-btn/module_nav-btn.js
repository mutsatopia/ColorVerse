const navBtn = document.querySelector(".nav-side-btn");
const navList = document.querySelector(".nav-side-list");
const genSide = document.querySelector(".gen-side");

let switchFlag = false;
navBtn.addEventListener("click", () => {
  if (!switchFlag) {
    navList.classList.add("on");
    removeClass(navList, "off");
    switchFlag = true;
    genSide.classList.add("on");
    removeClass(genSide, "off");
  } else {
    navList.classList.add("off");
    removeClass(navList, "on");
    switchFlag = false;
    genSide.classList.add("off");
    removeClass(genSide, "on");
  }
});
const sectSide = document.querySelector(".sect-side");

const removeClass = (el, attr) => {
  if (el.classList) {
    el.classList.remove(attr);
  } 
}