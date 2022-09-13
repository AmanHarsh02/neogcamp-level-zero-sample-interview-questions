const loadingText = document.querySelector("#loading-text");
const loadedBtn = document.querySelector("#loaded-btn");

function onCLickHandler() {
    loadingText.style.display = "none";
}

loadedBtn.addEventListener("click", onCLickHandler);