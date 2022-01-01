const navBtn = document.querySelector(".nav-side-btn");
const navList = document.querySelector(".nav-side-list");
const genSide = document.querySelector(".gen-side");

let switchFlag = false;
navBtn.addEventListener("click", () => {
  if (!switchFlag) {
    navList.classList.add("on");
    navList.classList.remove("off");
    switchFlag = true;
    genSide.classList.add("on");
    genSide.classList.remove("off");
  } else {
    navList.classList.add("off");
    navList.classList.remove("on");
    switchFlag = false;
    genSide.classList.add("off");
    genSide.classList.remove("on");
  }
});
