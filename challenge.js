let cart = JSON.parse(localStorage.getItem("cart")) || [];

let nameInput = document.getElementById("name");
let priceInput = document.getElementById("price");
let addBtn = document.getElementById("addBtn");
let cartList = document.getElementById("cartList");
let totalDisplay = document.getElementById("total");

function displayCart() {

    cartList.innerHTML = "";

    let total = 0;

    cart.forEach((item, index) => {

        let li = document.createElement("li");

        li.textContent = item.name + " - $" + item.price;

        let removeBtn = document.createElement("button");

        removeBtn.textContent = "Remove";

        removeBtn.addEventListener("click", () => {

            cart.splice(index, 1);

            localStorage.setItem("cart", JSON.stringify(cart));

            displayCart();
        });

        li.appendChild(removeBtn);

        cartList.appendChild(li);

        total += Number(item.price);
    });

    totalDisplay.textContent = total;
}

displayCart();

addBtn.addEventListener("click", () => {

    let item = {
        name: nameInput.value,
        price: priceInput.value
    };

    cart.push(item);

    localStorage.setItem("cart", JSON.stringify(cart));

    displayCart();

    nameInput.value = "";
    priceInput.value = "";
});