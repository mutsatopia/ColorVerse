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
// console.log(scrollElements); Nodelist 반환
// .js-scroll class가 붙어 있는 요소들 모두 선택

const elementInView = (el, dividend = 1) => {
  // Nodelist 요소마다
  const elementTop = el.getBoundingClientRect().top;
  // viewport top부터 해당 요소 사각형 윗변까지의 거리
  return (
    elementTop <= // elementTop거리가
    (window.innerHeight /* 화면 내부 높이나 */ ||
      document.documentElement.clientHeight) /*html등 root 요소의 내부 높이*/ /
      dividend
    // 를 dividend 등 정해놓은 값으로 나눈 값보가 작으면 true 반환
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop >= (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
  // scrolled class 추가
};

const displayElement = (element) => {
  element.style.display = "block";
};
const hideElement = (element) => {
  element.style.display = "none";
  removeClass(navList, "off");
  removeClass(navList, "on");
  removeClass(genSide, "on");
  removeClass(genSide, "off");
};

// const hideScrollElement = (element) => {
//   element.classList.remove("scrolled");
// };

const handleScrollAnimation = () => {
  // Nodelist 각 요소마다
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      // elementTop거리가 화면 내부 높이나 html등 root 요소의 내부 높이를 즉, 보이는 화면 내부 높이를 dividend 등 정해놓은 값(1.25)으로 나눈 값보다 작으면
      displayScrollElement(el);
      // 요소에 대해 displayScrollElement 함수 실행
      // } else if (elementOutofView(el)) {
      // hideScrollElement(el)
    }
  });
};
window.addEventListener("scroll", () => {
  handleScrollAnimation();
  // scroll event 발생시 handleScrollAnimation 함수 실행
  if (elementOutofView(main)) {
    hideElement(sectSide);
  } else if (elementInView(main)) {
    displayElement(sectSide);
  }
});
