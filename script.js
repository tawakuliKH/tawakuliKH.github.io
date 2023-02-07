let btn = document.querySelector(".vector");
let mobileMenu = document.querySelector(".navbar-mobile");
let closeIcon = document.querySelector(".cross-btn");

function toggleMenu() {
    if (mobileMenu.style.display == "none") {
        mobileMenu.style.display = "block";
    } else {
        mobileMenu.style.display = "none"
    }
}

btn.addEventListener("click", toggleMenu)
