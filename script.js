function menuBurger() {
    const burger = document.querySelector("#burger")
    const navbar = document.querySelector("nav#navbar") 
    
    burger.addEventListener("click", () => {
        if (navbar.style.display === "block") {
            navbar.style.display = "none"
        } else {
            navbar.style.display = "block"
        }
    })
}

menuBurger()