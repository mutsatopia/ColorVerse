document.querySelector(".copy-btn").addEventListener("click", () => {
    const resultCode = document.querySelector(".result-code");
    const bgColor = resultCode.textContent.trim().slice(17, -1);
    var tempElem = document.createElement("textarea");
    tempElem.value = bgColor;
    document.body.appendChild(tempElem);

    tempElem.select();
    document.execCommand("copy");
    document.body.removeChild(tempElem);

    const copyNotice = document.querySelector(".copy-notice");
    copyNotice.style.display = "inline-block";
    setTimeout(() => {
        copyNotice.style.display = "none";
    }, 1000);
});
