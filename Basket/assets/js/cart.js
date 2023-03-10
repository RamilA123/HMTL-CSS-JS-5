"use strict"


let products = JSON.parse(localStorage.getItem("products"));
let tableBody = document.querySelector("tbody");
let alert = document.querySelector(".alert-warning");


if (products != null){
    products.forEach(product => {
        tableBody.innerHTML += `<tr>
        <td><img src="${product.image}" alt=""></td>
        <td>${product.name}</td>
        <td>${product.description}</td>
        <td>
        <div class="price">
        <button>-</button>
        <input type="number" min="1" disabled>
        <button class="btn1">+</button>
        </div> 
        <span class="price"> ${product.price} ${product.currency}</span> 
        </td>
        <td>${product.count}</td>
        <td><i class="fa-solid fa-trash-can"></i></td>
        </tr>`
    }); 
}
else{
    tableBody.parentNode.classList.add("d-none");
    alert.classList.remove("d-none");
}

if (products != null){
    getBasketCount(products);
}

function getBasketCount(arr){
    let count = 0;
    for (const product of arr) {
        count += product.count;
    }

    let sup = document.querySelector("sup");
    sup.innerText = count;
}




