const checkLoginBtn = document.querySelector("#not_logged_in_btn");
const checkPageBtn = document.querySelector("#page_not_found_btn");
const outputDiv = document.querySelector("#api-response-div");

const userStateUrl = "https://unitube-server.herokuapp.com/playlists";
const pageAvailabilityUrl = "https://jsonplaceholder.typicode.com/dummyUsers";

function loginErrorHandler(error) {
    console.log("Error Occured.", error);
    outputDiv.innerText = "Error: 401 - You are not logged in."
}

function pageErrorHandler(error) {
    console.log("Error Occured.", error);
    outputDiv.innerText = "Error: 404 - Page not found."
}

function fetchUserStateApiResponse() {
    fetch(userStateUrl).then(response => { 
        response.json()
        if(response.status === 401) {
            throw new Error(response.status);
        } }).catch(loginErrorHandler);
}

function fetchPageAvailabilityApiResponse() {
    fetch(pageAvailabilityUrl).then(response => { 
        response.json()
        if(response.status === 404) {
            throw new Error(response.status);
        } }).catch(pageErrorHandler);
}

function checkUserState() {
    fetchUserStateApiResponse();
}

function checkPageAvailability() {
    fetchPageAvailabilityApiResponse();
}

checkLoginBtn.addEventListener("click", checkUserState);

checkPageBtn.addEventListener("click", checkPageAvailability);