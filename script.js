const products = [

{
id:1,
name:"Black Oversized T-Shirt",
category:"T-Shirt",
price:799,
image:"https://veirdo.in/cdn/shop/files/Artboard_4_45.jpg?v=1758349584",

description:"Premium oversized black t-shirt."
},

{
id:2,
name:"White Casual T-Shirt",
category:"T-Shirt",
price:699,
image:"https://imagescdn.pantaloons.com/img/app/product/1/1018675-13894618.jpg?auto=format&w=450",
description:"Comfortable everyday wear."
},

{
id:3,
name:"Streetwear Hoodie",
category:"Hoodie",
price:1499,
image:"https://i.etsystatic.com/48167751/r/il/de309c/5709696259/il_fullxfull.5709696259_eydj.jpg",
description:"Warm and stylish hoodie."
},

{
id:4,
name:"Black Hoodie",
category:"Hoodie",
price:1599,
image:"https://giysi.in/cdn/shop/files/Oversized-Black-Hoodie.jpg?v=1768977184&width=1080",

description:"Classic black hoodie."
},

{
id:5,
name:"Denim Jacket",
category:"Jacket",
price:1999,
image:"https://rukmini1.flixcart.com/image/1500/1500/xif0q/jacket/c/c/a/m-1-no-jakt-denim-mblue-01-urbano-fashion-original-imahgbeyzzd9wtym.jpeg?q=70",

description:"Premium denim jacket."
},

{
id:6,
name:"Bomber Jacket",
category:"Jacket",
price:2299,
image:"https://m.media-amazon.com/images/I/81y-ltRR5jL._AC_UY1100_.jpg",
description:"Modern bomber jacket."
},

{
id:7,
name:"Slim Fit Jeans",
category:"Jeans",
price:1299,
image:"https://imagescdn.louisphilippe.com/img/app/product/3/39943326-19034685.jpg?auto=format&w=390",
description:"Comfortable slim fit jeans."
},

{
id:8,
name:"Blue Denim Jeans",
category:"Jeans",
price:1399,
image:"https://assets.myntassets.com/assets/images/31334769/2025/2/12/49c399d0-e0d2-4dfa-92ea-921220e6f2821739367513840-The-Pant-Project-Men-Slim-Fit-Mid-Rise-Denim-Jeans-with-Stre-1.jpg",
description:"Premium blue denim."
},

{
id:9,
name:"Graphic T-Shirt",
category:"T-Shirt",
price:899,
image:"https://veirdo.in/cdn/shop/files/b_0119493a-9927-4550-8323-baefe5f625c0.jpg?v=1759917565",
description:"Trendy graphic tee."
},

{
id:10,
name:"Red Hoodie",
category:"Hoodie",
price:1699,
image:"https://www.bonkerscorner.com/cdn/shop/files/red-signature-oversized-heavyweight-hoodie-fleece-xs-bonkerscorner-store-33689144229988.jpg?v=1773833223",
description:"Stylish red hoodie."
},

{
id:11,
name:"Leather Jacket",
category:"Jacket",
price:3499,
image:"https://mahetri.in/cdn/shop/files/custom_resized_cd0e7360-9d64-4160-86ee-abd9b0264030_700x700.jpg?v=1758707773",
description:"Premium leather jacket."
},

{
id:12,
name:"Cargo Jeans",
category:"Jeans",
price:1499,
image:"https://wrogn.com/cdn/shop/files/1_ef9d9330-e957-42e5-8023-a89a9325b93f.webp?v=1740634437",
description:"Streetwear cargo jeans."
},

{
id:13,
name:"Classic White Tee",
category:"T-Shirt",
price:599,
image:"https://www.dripmylook.in/cdn/shop/files/WHIET1.jpg?v=1731059000",
description:"Minimal white tee."
},

{
id:14,
name:"Grey Hoodie",
category:"Hoodie",
price:1599,
image:"https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/740089s5.jpg?im=Resize,width=750",
description:"Comfort fit hoodie."
},

{
id:15,
name:"Winter Jacket",
category:"Jacket",
price:2999,
image:"https://m.media-amazon.com/images/I/812jICXRUjL._AC_UY1100_.jpg",
description:"Warm winter jacket."
},

{
id:16,
name:"Black Jeans",
category:"Jeans",
price:1399,
image:"https://rukminim2.flixcart.com/image/480/640/xif0q/jean/x/c/q/36-united197-dark-grey-united-denim-original-imahfwnxjnrznqf4.jpeg?q=90",
description:"Classic black jeans."
},

{
id:17,
name:"Printed T-Shirt",
category:"T-Shirt",
price:799,
image:"https://static.yourprint.in/new-admin-ajax.php?action=resize_outer_image&cfcache=all&url=s3-media/d-i-o/Tshirts/Men/tshirt_hs_men_pat_d48_o.jpg&resizeTo=600",
description:"Printed cotton t-shirt."
},

{
id:18,
name:"Zip Hoodie",
category:"Hoodie",
price:1799,
image:"https://dtcralphlauren.scene7.com/is/image/PoloGSI/s7-1467050_alternate10?$rl_4x5_pdp$",
description:"Premium zip hoodie."
},

{
id:19,
name:"Varsity Jacket",
category:"Jacket",
price:2599,
image:"https://assets.myntassets.com/h_1440,q_75,w_1080/v1/assets/images/20246714/2024/1/3/378071c7-74db-49cd-9e5b-74134493957c1704264842178-FUGAZEE-Men-Green-Varsity-Jacket-with-Patchwork-859170426484-1.jpg",
description:"Trendy varsity jacket."
},

{
id:20,
name:"Ripped Jeans",
category:"Jeans",
price:1599,
image:"https://m.media-amazon.com/images/I/81tx-jZCbKL._AC_UY1100_.jpg",
description:"Modern ripped jeans."
}

];





const productContainer =
document.getElementById("productContainer");

function displayProducts(items){

if(!productContainer) return;

productContainer.innerHTML = "";

items.forEach(product=>{

productContainer.innerHTML += `

<div class="product-card">

<img src="${product.image}"
alt="${product.name}">

<div class="product-info">

<h3>${product.name}</h3>

<p class="price">₹${product.price}</p>

<p>${product.category}</p>

<p class="product-desc">${product.description}</p>

<div class="product-options">

<select id="size-${product.id}">
<option>S</option>
<option>M</option>
<option>L</option>
<option>XL</option>
</select>

<select id="color-${product.id}">
<option>Black</option>
<option>White</option>
<option>Blue</option>
<option>Red</option>
</select>

</div>

<button
class="btn"
onclick="addToCart(${product.id})">
Add To Cart
</button>

</div>

</div>

`;

});

}

displayProducts(products);






const searchInput =
document.getElementById("searchInput");

if(searchInput){

searchInput.addEventListener("keyup",()=>{

const searchValue =
searchInput.value.toLowerCase();

const filteredProducts =
products.filter(product =>
product.name.toLowerCase()
.includes(searchValue)
);

displayProducts(filteredProducts);

});

}





const categoryFilter =
document.getElementById("categoryFilter");

if(categoryFilter){

categoryFilter.addEventListener("change",()=>{

const selectedCategory =
categoryFilter.value;

if(selectedCategory === "all"){

displayProducts(products);

}else{

const filteredProducts =
products.filter(product =>
product.category === selectedCategory
);

displayProducts(filteredProducts);

}

});

}










let cart =
JSON.parse(localStorage.getItem("cart")) || [];

function updateCartCount(){

    const cartCountEls =
    document.querySelectorAll(".cart-count");

    cartCountEls.forEach(el=>{

        el.textContent = cart.length;
        el.classList.add("bump");

        setTimeout(()=>{
            el.classList.remove("bump");
        },400);

    });

}

function showToast(message){

    const existing =
    document.querySelector(".toast");

    if(existing) existing.remove();

    const toast =
    document.createElement("div");

    toast.className = "toast";
    toast.textContent = message;
    document.body.appendChild(toast);

    requestAnimationFrame(()=>{
        toast.classList.add("show");
    });

    setTimeout(()=>{

        toast.classList.remove("show");

        setTimeout(()=> toast.remove(),300);

    },2000);

}

function addToCart(productId){

    const product =
    products.find(item => item.id === productId);

    if(!product) return;

    const sizeEl =
    document.getElementById("size-" + productId);

    const colorEl =
    document.getElementById("color-" + productId);

    const cartItem = {
        ...product,
        size: sizeEl ? sizeEl.value : null,
        color: colorEl ? colorEl.value : null
    };

    cart.push(cartItem);

    localStorage.setItem(
    "cart",
    JSON.stringify(cart)
    );

    updateCartCount();
    showToast(product.name + " added to cart");

}




function displayCart(){

const cartItems =
document.getElementById("cartItems");

const cartTotal =
document.getElementById("cartTotal");

if(!cartItems) return;

cartItems.innerHTML = "";

let total = 0;

cart.forEach((item,index)=>{

total += item.price;

cartItems.innerHTML += `

<div class="cart-item">

<div>

<h3>${item.name}</h3>

<p>₹${item.price}</p>

${item.size ? `<p>Size: ${item.size}</p>` : ""}
${item.color ? `<p>Color: ${item.color}</p>` : ""}

</div>

<button
class="btn"
onclick="removeFromCart(${index})">

Remove

</button>

</div>

`;

});

cartTotal.textContent = total;

}

displayCart();
updateCartCount();




function removeFromCart(index){

cart.splice(index,1);

localStorage.setItem(
"cart",
JSON.stringify(cart)
);

displayCart();
updateCartCount();

}





const registerForm =
document.getElementById("registerForm");

if(registerForm){

registerForm.addEventListener(
"submit",
function(e){

e.preventDefault();

const name =
document.getElementById("registerName").value;

const email =
document.getElementById("registerEmail").value;

const password =
document.getElementById("registerPassword").value;

const user = {

name,
email,
password

};

localStorage.setItem(
"user",
JSON.stringify(user)
);

alert("Registration Successful");

window.location.href =
"login.html";

});

}





const loginForm =
document.getElementById("loginForm");

if(loginForm){

loginForm.addEventListener(
"submit",
function(e){

e.preventDefault();

const email =
document.getElementById("loginEmail").value;

const password =
document.getElementById("loginPassword").value;

const user =
JSON.parse(
localStorage.getItem("user")
);

if(
user &&
user.email === email &&
user.password === password
){

alert("Login Successful");

window.location.href =
"index.html";

}else{

alert("Invalid Email or Password");

}

});

}





const checkoutForm =
document.getElementById("checkoutForm");

if(checkoutForm){

checkoutForm.addEventListener(
"submit",
function(e){

e.preventDefault();

const name =
document.getElementById("customerName").value;

const phone =
document.getElementById("customerPhone").value;

const address =
document.getElementById("customerAddress").value;

let total = 0;

let productList = "";

cart.forEach(item=>{

total += item.price;

productList +=
`${item.name} - ₹${item.price}\n`;

});

const message =

`🛒 NEW ORDER

Name: ${name}

Phone: ${phone}

Address: ${address}

Products:

${productList}

Total Amount: ₹${total}`;

const whatsappURL =

`https://wa.me/918317316235?text=${encodeURIComponent(message)}`;

window.open(
whatsappURL,
"_blank"
);

localStorage.removeItem("cart");
cart = [];
});

}







