const colorPick = document.querySelectorAll(".color-pick");
const colorCode = document.querySelectorAll(".color-code");

colorCode.forEach((elem, index) => {
    elem.addEventListener("change", () => {
        if (!colorCode[index].value.match(/\#([0-9]|[a-f]){6,6}/i)) {
            colorPick[index].value = "#ffffff";
            colorCode[index].value = "#ffffff";
            colorCode[index].style = "color: black";
        } else {
            colorPick[index].value = colorCode[index].value;
            if (colorCode[index].value[3] <= 8) {
                colorCode[index].style = "color: white";
            } else {
                colorCode[index].style = "color: black";
            }
        }
    });
});

colorPick.forEach((elem, index) => {
    elem.addEventListener("input", function () {
        console.log('!!!')
        colorCode[index].value = this.value;
        if (this.value[3] <= 8) {
            colorCode[index].style = "color: white";
        } else {
            colorCode[index].style = "color: black";
        }
    });
});

// function ChangeTextColor(hex) {
//     // 페이지 초기 로딩시 colorPick의 색에 따라 colorCode의 색을 바꿔주는 함수 작성할 것
//     if (hex[3] <= 8) {
//         hex.style = "color: white";
//     } else {
//         hex.style = "color: black";
//     }
// }

// ChangeTextColor('#253456');

// const btn = document.querySelector(".btn");
// btn.addEventListener("click", () => {
//     const hexArr = [...colorPick].map((elem) => {
//         return elem.value;
//     });
//     console.log(hexArr);
// });
