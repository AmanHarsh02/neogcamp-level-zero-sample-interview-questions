const input = document.querySelector("#input");
const output = document.querySelector("#output");
const button = document.querySelectorAll("#font_size_btn");

const fontSize = {
    h1: "1.7rem",
    h2: "1.5rem",
    h3: "1.2rem"
}

function onChangeHandler(event) {
    output.innerText = event.target.value;
}

function buttonClickHandler(event) {
    var headingType = event.target.value;

    if(headingType === "h1") {
        output.style.fontSize = fontSize.h1;
    } else if(headingType === "h2") {
        output.style.fontSize = fontSize.h2;
    } else if(headingType === "h3") {
        output.style.fontSize = fontSize.h3;
    }
}

input.addEventListener("input", onChangeHandler);

button.forEach(function(btn) {
    btn.addEventListener("click", buttonClickHandler);
});