const checkLoginBtn = document.querySelector("#not_logged_in_btn");
const checkPageBtn = document.querySelector("#page_not_found_btn");
const outputDiv = document.querySelector("#api-response-div");

const userStateUrl = "https://unitube-server.herokuapp.com/playlists";
const pageAvailabilityUrl = "https://jsonplaceholder.typicode.com/dummyUsers";

function errorHandler(error) {
    console.log("Error Occured.", error);
    alert("Something went wrong with server! Try again after some time.")
}

function fetchUserStateApiResponse() {
    fetch(userStateUrl).then(response => response.json()).then(json => {
        var apiResponse = json.message;
        outputDiv.innerText = apiResponse;
        console.log(json);
    }).catch(errorHandler);
}

function fetchPageAvailabilityApiResponse() {
    fetch(pageAvailabilityUrl).then(response => response.json()).then(json => {
        console.log(json);
    }).catch(errorHandler);
}

function checkUserState() {
    fetchUserStateApiResponse();
}

function checkPageAvailability() {
    fetchPageAvailabilityApiResponse();
}

checkLoginBtn.addEventListener("click", checkUserState);

checkPageBtn.addEventListener("click", checkPageAvailability);