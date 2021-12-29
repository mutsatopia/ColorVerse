document.querySelector(".copy-btn").addEventListener("click", () => {
    const resultCode = document.querySelector(".result-code");
    const bgColor = resultCode.textContent.replace(/^\s+|\s{2,}|\s+$|\;/gm, "");
    const tempElem = document.createElement("textarea");
    tempElem.value = bgColor;
    document.body.appendChild(tempElem);

    tempElem.select();
    document.execCommand("copy");
    document.body.removeChild(tempElem);

    hideNotice();
});

function hideNotice() {
    const copyNotice = document.querySelector(".copy-notice");
    copyNotice.style.display = "inline-block";
    setTimeout(() => {
        copyNotice.style.display = "none";
    }, 1000);
}
