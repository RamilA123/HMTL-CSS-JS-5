let basketBtns = document.querySelectorAll(".add-basket");
let basket = [];


if (JSON.parse(localStorage.getItem("products")) != null) {
    basket = JSON.parse(localStorage.getItem("products"));
    let count = 0;
    for (const product of basket) {
        count += product.count;
    }

    let sup = document.querySelector("sup");
    sup.innerText = count;
}

basketBtns.forEach(btn => {
    btn.addEventListener("click", function (e) {
        e.preventDefault();
        let productImage = this.closest(".card").firstElementChild.getAttribute("src");
        let productName = this.parentNode.firstElementChild.innerText;
        let productDescription = this.previousElementSibling.innerText;
        let productPrice = parseInt(this.nextElementSibling.innerText);
        let productCurrency = this.nextElementSibling.firstElementChild.innerText;
        let productId = parseInt(this.closest(".card").getAttribute("data-id"));

        let existedProduct = basket.find(m => m.id == productId);
        if (existedProduct != undefined) {
            existedProduct.count++;
        }
        else {
            let product = {
                id: productId,
                image: productImage,
                name: productName,
                description: productDescription,
                price: productPrice,
                currency: productCurrency,
                count: 1
            }
            basket.push(product);
        }
        localStorage.setItem("products", JSON.stringify(basket));
        getBasketCount(basket);
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
          })
    })
})

function getBasketCount(arr) {
    let count = 0;
    for (const product of arr) {
        console.log(product);
        count += product.count;
    }

    let sup = document.querySelector("sup");
    sup.innerText = count;
}

