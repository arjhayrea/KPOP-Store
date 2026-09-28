let cart = [];

function addToCart(name, price) {

    cart.push({
        name: name,
        price: price
    });

    document.getElementById("cart-count").textContent = cart.length;

    alert(name + " was added to your cart! 💜");
}

function showCart() {

    if (cart.length === 0) {
        alert("Your cart is empty.");
        return;
    }

    let message = "🛒 YOUR CART\n\n";
    let total = 0;

    cart.forEach((item, index) => {

        message +=
            (index + 1) +
            ". " +
            item.name +
            " - ₱" +
            item.price.toLocaleString() +
            "\n";

        total += item.price;
    });

    message +=
        "\n----------------\n" +
        "TOTAL: ₱" +
        total.toLocaleString();

    alert(message);
}
