// CART DATA
let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartItems = document.getElementById("cart-items");
const cartCount = document.getElementById("cart-count");
const totalPrice = document.getElementById("total-price");

// UPDATE CART UI
function updateCart() {

    cartItems.innerHTML = "";

    let total = 0;

    cart.forEach((item, index) => {

        total += item.price;

        const div = document.createElement("div");

        div.innerHTML = `
            <p>
                ${item.name} - ₹${item.price}
                <button onclick="removeItem(${index})">
                    Remove
                </button>
            </p>
        `;

        cartItems.appendChild(div);

    });

    cartCount.textContent = cart.length;
    totalPrice.textContent = total;

    localStorage.setItem("cart", JSON.stringify(cart));
}

// ADD TO CART
document.querySelectorAll(".add-cart").forEach(button => {

    button.addEventListener("click", () => {

        const name = button.dataset.name;
        const price = Number(button.dataset.price);

        cart.push({
            name,
            price
        });

        updateCart();

        alert(`${name} added to cart!`);

    });

});

// REMOVE ITEM
function removeItem(index) {

    cart.splice(index, 1);

    updateCart();

}

// INITIAL LOAD
updateCart();

// SEARCH FUNCTION
const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", () => {

    const value = searchInput.value.toLowerCase();

    const cards = document.querySelectorAll(".product-card");

    cards.forEach(card => {

        const title =
            card.querySelector("h3").textContent.toLowerCase();

        if (title.includes(value)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });

});

// LOGIN MODAL
const modal = document.getElementById("loginModal");

const loginBtn = document.getElementById("loginBtn");

const closeBtn = document.querySelector(".close");

loginBtn.addEventListener("click", () => {

    modal.style.display = "block";

});

closeBtn.addEventListener("click", () => {

    modal.style.display = "none";

});

window.addEventListener("click", (e) => {

    if (e.target === modal) {

        modal.style.display = "none";

    }

});

// LOGIN FORM
const loginForm = document.querySelector("form");

loginForm.addEventListener("submit", (e) => {

    e.preventDefault();

    alert("Login Successful!");

    modal.style.display = "none";

});

// INSTAGRAM CHECKOUT
const checkoutBtn =
    document.getElementById("checkoutBtn");

checkoutBtn.addEventListener("click", () => {

    if (cart.length === 0) {

        alert("Your cart is empty!");

        return;

    }

    window.location.href =
    "https://www.instagram.com/mousam_d_shady/";

});

// CATEGORY FILTER (Optional)
const categoryCards =
    document.querySelectorAll(".category-card");

categoryCards.forEach(card => {

    card.addEventListener("click", () => {

        const category =
            card.textContent.trim().toLowerCase();

        const products =
            document.querySelectorAll(".product-card");

        products.forEach(product => {

            const title =
                product.querySelector("h3")
                .textContent
                .toLowerCase();

            if (
                category === "men" &&
                (title.includes("shirt") ||
                title.includes("hoodie") ||
                title.includes("jacket"))
            ) {

                product.style.display = "block";

            }

            else if (
                category === "women" &&
                title.includes("women")
            ) {

                product.style.display = "block";

            }

            else if (
                category === "shoes" &&
                title.includes("sneakers")
            ) {

                product.style.display = "block";

            }

            else if (
                category === "accessories" &&
                title.includes("cap")
            ) {

                product.style.display = "block";

            }

            else {

                product.style.display = "none";

            }

        });

    });

});

// SHOW ALL PRODUCTS WHEN SEARCH IS CLEARED
searchInput.addEventListener("search", () => {

    document.querySelectorAll(".product-card")
    .forEach(card => {

        card.style.display = "block";

    });

});

console.log("Klothing Loaded Successfully");