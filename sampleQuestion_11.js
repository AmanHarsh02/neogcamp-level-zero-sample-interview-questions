const input = document.querySelector("#input");
const passwordStrength = document.querySelector("#password-strength");
const submitBtn = document.querySelector("#submit-btn");

// function onCLickHandler() {
//     passwordStrength.innerText = "";
//     const password = input.value;

//     if(password.length < 10 && password.length > 0) {
//         passwordStrength.innerText = "Weak Password"
//         passwordStrength.style.color = "red";
//     } else if(password.length >= 10){
//         passwordStrength.innerText = "Strong Password"
//         passwordStrength.style.color = "lightgreen";
//     } else {
//         passwordStrength.innerText = "Please Enter Something";
//         passwordStrength.style.color = "red";
//     }
// }

function onChangeListener() {
    const password = input.value;

    if(password.length < 10 && password.length > 0) {
        passwordStrength.innerText = "Weak Password"
        passwordStrength.style.color = "red";
        submitBtn.setAttribute('disabled', null);
        input.style.border = "3px Solid red";
    } else if(password.length >= 10){
        passwordStrength.innerText = "Strong Password"
        passwordStrength.style.color = "lightgreen";
        submitBtn.removeAttribute('disabled');
        input.style.border = "3px Solid lightgreen";
    } else {
        passwordStrength.innerText = "";
        input.style.border = "2px Solid #2563eb";
    }
}

//submitBtn.addEventListener("click", onCLickHandler);

input.addEventListener("input", onChangeListener);