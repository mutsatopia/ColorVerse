const navBtn = document.querySelector(".nav-side-btn");
const navList = document.querySelector(".nav-side-list");
const genSide = document.querySelector(".gen-side");

let switchFlag = false;
navBtn.addEventListener("click", () => {
  if (!switchFlag) {
    navList.classList.add("on");
    genSide.classList.add("on");
    navList.classList.remove("off");
    genSide.classList.remove("off");
    switchFlag = true;
  } else {
    navList.classList.add("off");
    genSide.classList.add("off");
    navList.classList.remove("on");
    genSide.classList.remove("on");
    switchFlag = false;
  }
});
