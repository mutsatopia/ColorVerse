//btn-gen 클릭시
const genBtn = document.querySelector(".btn-gen");
const bgChange = document.querySelector(".bg-color");

const main = document.querySelector("main");
const bottomBox = document.querySelector(".bg-bottom");

genBtn.addEventListener("click", () => {
  bgChange.classList.add("changed");
  main.classList.remove("hide");
  bottomBox.classList.remove("hide");

  const artRec = document.querySelector(".art-rec");
  artRec.scrollIntoView({ behavior: "smooth", block: "end" });
});

// bottom-box 안에 floating 효과
function floatingObject(selector) {
  gsap.to(selector, 1, {
    y: 15,
    repeat: -1,
    yoyo: true,
    ease: Power1.easeInOut,
  });
}
floatingObject(".floating");

// paletts 나타내기
const scrollElements = document.querySelectorAll(".js-scroll");
const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el)
    }
  })
}

window.addEventListener("scroll", () => { 
  handleScrollAnimation();
});
