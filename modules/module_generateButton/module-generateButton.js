function generate(page) {
    if (page === "palletes") {
        generatePalletes();
    }
    if (page === "gradient") {
        generateGradient();
    }
}

function generatePalletes() {
    // Palletes 페이지에서 GENERATE 버튼 눌렀을 때의 로직을 적어주세요.
}

function generateGradient() {
    const orientation = document.querySelector(
        `input[name="orientation"]:checked`
    );
    const colorCode = document.querySelectorAll(".color-code");
    const resultCode = document.querySelector(".result-code");

    const hexArr = [...colorCode].map((elem) => {
        return elem.value;
    });

    resultCode.textContent = `background-image: ${
        orientation.value === "circle" ? "radial-gradient" : "linear-gradient"
    }(${orientation.value}, ${hexArr.join(", ")});`;
    paintBackground();
}

function paintBackground() {
    const resultCode = document.querySelector(".result-code");
    const bgColor = resultCode.textContent.trim().slice(17, -1);
    document.body.style.background = bgColor;
}
paintBackground();
