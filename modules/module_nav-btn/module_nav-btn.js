const navBtn = document.querySelector(".nav-side-btn");
const navList = document.querySelector(".nav-side-list");

navList.style.display = "none";
let flag = false;
navBtn.addEventListener("click", () => {
  navList.style.display = "block";
  if (!flag) {
    navList.classList.add("on");
    flag = true;
    console.log(flag);
  } else {
    navList.classList.remove("on");
    navList.setAttribute("animation", "slide-in-left 1s ease-in-out both;");
    flag = false;
    console.log(flag);
  }
});
