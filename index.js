let myUsername = document.getElementById("usernameContainers");
let myPassword = document.getElementById("passwordContainers");
let myLogin = document.getElementById("loginContainer");


myLogin.addEventListener('click', function(event){
    event.preventDefault();
    const username = myUsername.value;
    const password = myPassword.value;
    if (username == 'smit1298' && password == 'asdflkj') {
    location.href = "start.html";
    return;
    } else {
alert ('access denied')
}
})


// autoOpenAlink(e) {
//     e.preventDefault();
//     let url = this.url;
//     window.open(url, "iframe testing page");
// },







// let formBtn = document.getElementById("submitForm")
// formBtn.addEventListener('click', function (event) {
// event.preventDefault();
// const myEmail = document.getElementById('email');
// const myEmailError = document.getElementById('email-error');
// if (myEmail.value == "") {
// myEmail.style.borderColor = "red";
// myEmailError.innerHTML = "enter email";
// myEmailError.style.color = "red"
// }
// })