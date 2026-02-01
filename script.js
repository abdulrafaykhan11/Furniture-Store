let filterBtn = document.querySelectorAll(".filter-btn .btn")
let product = document.querySelectorAll(".product-item")

filterBtn.forEach((button) => {
    button.addEventListener("click" , () => {
        filterBtn.forEach((btn) => {
            btn.classList.remove("active")
        })
        button.classList.add("active")

        let filter = button.getAttribute("data-filter")
        product.forEach((item) => {
            if(filter === "all"){
                item.style.display = "block"
            }
            else{
                if(item.getAttribute("data-category") === filter){
                    item.style.display = "block"
                }
                else{
                    item.style.display = "none"
                }
            }
        })
    })
})
let form = document.querySelector("form")
let user = document.querySelector("input[type='text']")
let email = document.querySelector("input[type='email']")
let message = document.querySelector("textarea")
form.addEventListener("submit" , (e) => {
    e.preventDefault()
    if(user.value.length < 3 || message.value.length < 10){
        user.classList.add("err")
        message.classList.add("err")
    }
    else{
        user.classList.remove("err")
        user.classList.add("suc")
        message.classList.remove("err")
        message.classList.add("suc")
    }
})