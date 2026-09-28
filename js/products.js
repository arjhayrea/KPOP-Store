const products = [

    {
        id: 1,
        name: "Red Velvet Queendom",
        group: "RE VELVET",
        category: "Albums",
        price: 1299,
        image: "images/Red Velvet Queendom.jpg"
    },

    {
        id: 2,
        name: "red-velvet-album-red-velvet-the-perfect-red-velvet-bad-boy-2nd-repackage-album-kihno-album-34203650982069",
        group: "RED VELVET",
        category: "Albums",
        price: 1299,
        image: "images/red-velvet-album-red-velvet-the-perfect-red-velvet-bad-boy-2nd-repackage-album-kihno-album-34203650982069.jpg"
    },

    {
        id: 3,
        name: "girls-generation-the-7th-album-forever-1-standard-ver-457219",
        group: "GIRLS GENERATION",
        category: "Albums",
        price: 1499,
        image: "images/girls-generation-the-7th-album-forever-1-standard-ver-457219.jpg"
    },

    {
        id: 4,
        name: "SUPERJUNIOR_Lightstick_Ver.2.0_Detail1-jpg",
        group: "SUPER JUNIOR",
        category: "Lightsick",
        price: 2500,
        image: "images/SUPERJUNIOR_Lightstick_Ver.2.0_Detail1-jpg.jpg"
    },

    {
        id: 5,
        name: "Official aespa GISELLE Photocard Whiplash KMS 4.0 Lucky Draw Curly Hair",
        group: "Aespa",
        category: "Photocard",
        price: 1500,
        image: "images/Official aespa GISELLE Photocard Whiplash KMS 4.0 Lucky Draw Curly Hair.jpg"
    
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
