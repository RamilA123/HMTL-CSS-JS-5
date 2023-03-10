let nameInput = document.querySelector(".name");
let surnameInput = document.querySelector(".surname");
let button = document.querySelector("button");
let ul = document.querySelector("ul");
let users = [];

if (JSON.parse(localStorage.getItem("users")) != null) {
    users = JSON.parse(localStorage.getItem("users"));
    for (const user of users) {
       ul.innerHTML += `<li class="li mt-3"> Name: ${user.name} / Surname: ${user.surname}</li>`
    }
}

button.addEventListener("click", function () {
    if (nameInput.value == "" && surnameInput.value == "") {
        alert("Please don't empty input.");
        return;
    }
    else {
        let user = {
            name: nameInput.value,
            surname: surnameInput.value
        }
        users.push(user);
        localStorage.setItem("users", JSON.stringify(users));
        ul.innerHTML += `<li class="li mt-3"> Name: ${user.name} / Surname: ${user.surname}</li>`
        nameInput.value = "";
        surnameInput.value = "";
    }
});






