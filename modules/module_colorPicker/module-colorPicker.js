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
            changeTextColor(colorCode[index]);
        }
    });
});

colorPick.forEach((elem, index) => {
    elem.addEventListener("input", () => {
        colorCode[index].value = colorPick[index].value;
        changeTextColor(colorCode[index]);
    });
});

colorCode.forEach((elem) => {
    changeTextColor(elem);
});

function changeTextColor(hex) {
    if (hex.value[3] <= 8) {
        hex.style = "color: white";
    } else {
        hex.style = "color: black";
    }
}
// const btn = document.querySelector(".btn");
// btn.addEventListener("click", () => {
//     const hexArr = [...colorPick].map((elem) => {
//         return elem.value;
//     });
//     console.log(hexArr);
// });
