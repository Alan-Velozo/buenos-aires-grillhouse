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

                                                /* Scroll */

document.addEventListener("scroll", function() {
    var divs = document.querySelectorAll(".left");
                                                
    divs.forEach(function(div) {
        var rect = div.getBoundingClientRect();
                                                
        if (rect.top <= window.innerHeight * 0.75) {
            div.style.opacity = "1";
            div.style.transform = "translateX(0)";
        } else {
            div.style.opacity = "0";
            div.style.transform = "translateX(-100%)";
        }
    });
});
                                                
document.addEventListener("scroll", function() {
    var divs = document.querySelectorAll(".right");
                                                
    divs.forEach(function(div) {
        var rect = div.getBoundingClientRect();
                                                
        if (rect.top <= window.innerHeight * 0.75) {
            div.style.opacity = "1";
            div.style.transform = "translateX(0)";
        } else {
            div.style.opacity = "0";
            div.style.transform = "translateX(200%)";
        }
    });
});
                                                
document.addEventListener("scroll", function() {
    var divs = document.querySelectorAll(".down");
                                                
    divs.forEach(function(div) {
        var rect = div.getBoundingClientRect();
                                                
        if (rect.top <= window.innerHeight * 0.75) {
            div.style.opacity = "1";
            div.style.transform = "translateY(0)";
        } else {
            div.style.opacity = "0";
            div.style.transform = "translateY(50%)";
        }
    });
});
                                                