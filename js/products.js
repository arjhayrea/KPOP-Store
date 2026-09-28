const products = [

    {
        id: 1,
        name: "Love Yourself: Answer",
        group: "BTS",
        category: "Albums",
        price: 1299,
        image: "images/bts-album.jpg"
    },

    {
        id: 2,
        name: "Formula of Love: O+T=<3",
        group: "TWICE",
        category: "Albums",
        price: 1499,
        image: "images/twice-album.jpg"
    },

    {
        id: 3,
        name: "Stray Kids Album",
        group: "Stray Kids",
        category: "Albums",
        price: 1599,
        image: "images/straykids-album.jpg"
    },

    {
        id: 4,
        name: "Born Pink",
        group: "BLACKPINK",
        category: "Albums",
        price: 1699,
        image: "images/blackpink-album.jpg"
    },

    {
        id: 5,
        name: "ARMY Bomb",
        group: "BTS",
        category: "Light Sticks",
        price: 2499,
        image: "images/bts-lightstick.jpg"
    },

    {
        id: 6,
        name: "CARAT Light Stick",
        group: "SEVENTEEN",
        category: "Light Sticks",
        price: 2599,
        image: "images/seventeen-lightstick.jpg"
    },

    {
        id: 7,
        name: "Official Light Stick",
        group: "aespa",
        category: "Light Sticks",
        price: 2799,
        image: "images/aespa-lightstick.jpg"
    },

    {
        id: 8,
        name: "Born Pink Tour Shirt",
        group: "BLACKPINK",
        category: "Merch",
        price: 899,
        image: "images/blackpink-shirt.jpg"
    },

    {
        id: 9,
        name: "SKZ Fan Hoodie",
        group: "Stray Kids",
        category: "Merch",
        price: 1299,
        image: "images/straykids-hoodie.jpg"
    },

    {
        id: 10,
        name: "TWICE Photocard Set",
        group: "TWICE",
        category: "Photocards",
        price: 499,
        image: "images/twice-photocard.jpg"
    },

    {
        id: 11,
        name: "SEVENTEEN Photocard Set",
        group: "SEVENTEEN",
        category: "Photocards",
        price: 499,
        image: "images/seventeen-photocard.jpg"
    }

];


let currentCategory = "All";

let cartCount = 0;


/* DISPLAY PRODUCTS */

function displayProducts(list) {

    const grid =
        document.getElementById(
            "productGrid"
        );

    grid.innerHTML = "";


    if (list.length === 0) {

        grid.innerHTML = `
            <div style="
                grid-column:1/-1;
                text-align:center;
                padding:50px;
            ">

                <h2>
                    No products found
                </h2>

                <p>
                    Try another search.
                </p>

            </div>
        `;

        updateProductCount(0);

        return;
    }


    list.forEach(product => {

        const card =
            document.createElement(
                "div"
            );

        card.className =
            "product-card";


        card.innerHTML = `

            <img
                class="product-image"
                src="${product.image}"
                alt="${product.name}"
                onerror="
                    this.src='https://placehold.co/700x700/f3edf5/19151f?text=K-POP+PRODUCT'
                "
            >

            <div class="product-info">

                <div class="product-category">

                    ${product.category}

                </div>


                <div class="product-name">

                    ${product.name}

                </div>


                <div class="product-group">

                    ${product.group}

                </div>


                <div class="product-bottom">

                    <div class="price">

                        ₱${product.price.toLocaleString()}

                    </div>


                    <button
                        class="add-cart"
                        onclick="
                            addToCart(${product.id})
                        "
                    >

                        Add

                    </button>

                </div>

            </div>

        `;


        grid.appendChild(card);

    });


    updateProductCount(list.length);
}


/* CATEGORY FILTER */

function filterCategory(category, button) {

    currentCategory = category;


    document
        .querySelectorAll(".category")
        .forEach(btn => {

            btn.classList.remove(
                "active"
            );

        });


    button.classList.add("active");


    searchProducts();
}


/* SEARCH */

function searchProducts() {

    const search =
        document
            .getElementById(
                "searchInput"
            )
            .value
            .toLowerCase();


    let filtered =
        products.filter(product => {

            const matchesSearch =

                product.name
                    .toLowerCase()
                    .includes(search)

                ||

                product.group
                    .toLowerCase()
                    .includes(search);


            const matchesCategory =

                currentCategory === "All"

                ||

                product.category ===
                    currentCategory;


            return (
                matchesSearch &&
                matchesCategory
            );

        });


    displayProducts(filtered);
}


/* CART */

function addToCart(productId) {

    cartCount++;

    document.getElementById(
        "cartCount"
    ).textContent =
        cartCount;


    const product =
        products.find(
            p => p.id === productId
        );


    alert(
        product.name +
        " was added to your cart!"
    );
}


/* PRODUCT COUNT */

function updateProductCount(number) {

    document.getElementById(
        "productCount"
    ).textContent =

        number +
        (number === 1
            ? " product"
            : " products");
}


/* LIVE SEARCH */

document
    .getElementById("searchInput")
    .addEventListener(
        "input",
        searchProducts
    );


/* INITIAL LOAD */

displayProducts(products);
