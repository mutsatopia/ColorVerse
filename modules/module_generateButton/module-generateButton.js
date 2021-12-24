const generateBtn = document.querySelector(".btn-gen");

function generate(page) {
    if (page === "palletes") {
        generatePalletes();
    }
    if (page === "gradient") {
        generateGradient();
    }
}

function generatePalletes(){
    // Palletes 페이지에서 GENERATE 버튼 눌렀을 때의 로직을 적어주세요.
}

function generateGradient() {
    const code = document.querySelector(".result-code");
    const orientation = document.querySelector(
        `input[name="orientation"]:checked`
    );
    const color = document.querySelector("");
    code.textContent = orientation.value;
}
