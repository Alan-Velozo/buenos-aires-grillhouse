let navbar = document.querySelector(".navbar");

document.querySelector(".fa-bars").onclick = function(){
    navbar.classList.toggle("active");

    searchForm.classList.remove("active");
    deliveryItem.classList.remove("active");
}

let searchForm = document.querySelector(".search-form");

document.querySelector(".fa-magnifying-glass").onclick = function(){
    searchForm.classList.toggle("active");

    navbar.classList.remove("active");
    deliveryItem.classList.remove("active");
}

let deliveryItem = document.querySelector(".delivery-items-container");

document.querySelector(".fa-cart-shopping").onclick = function(){
    deliveryItem.classList.toggle("active");

    navbar.classList.remove("active");
    searchForm.classList.remove("active");
}

window.onscroll = function(){
    navbar.classList.remove("active");
    searchForm.classList.remove("active");
    deliveryItem.classList.remove("active");
}