const userInput = document.querySelector("#input");
const callApiBtn = document.querySelector("#call-api-btn");
const outputArea = document.querySelector("#api-response-area");

var url = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

function constructUrl(inputText) {
    return url + "?" + "text=" + inputText;
}

function fetchApiResponse(inputText) {
    fetch(constructUrl(inputText)).then(response => response.json()).then(json => {
        var apiResponse = json.contents.translated;
        outputArea.innerText = apiResponse + " " + inputText;
        console.log(json);
    })
}

function onClickHandler() {
    const inputText = userInput.value;
    fetchApiResponse(inputText);
}

callApiBtn.addEventListener("click", onClickHandler);