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

let form = document.querySelector(".contact-form")
let name = document.querySelector("#name")
let email = document.querySelector("#email")
let message = document.querySelector("#message")

let nameErr = document.querySelector("#name-err")
let emailErr = document.querySelector("#email-err")
let messageErr = document.querySelector("#message-err")

let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener("keyup", (e) => {
    e.preventDefault()

    let valid = true

    let user = name.value.trim()
    let useremail = email.value.trim()
    let usermessage = message.value.trim()

    // NAME
    if (user.length < 3) {
        name.classList.add("err")
        name.classList.remove("suc")
        nameErr.textContent = "Name must be at least 3 characters"
        valid = false
    } else {
        name.classList.remove("err")
        name.classList.add("suc")
        nameErr.textContent = ""
    }

    // EMAIL
    if (!emailRegex.test(useremail)) {
        email.classList.add("err")
        email.classList.remove("suc")
        emailErr.textContent = "Email is not valid"
        valid = false
    } else {
        email.classList.remove("err")
        email.classList.add("suc")
        emailErr.textContent = ""
    }

    // MESSAGE
    if (usermessage.length < 10) {
        message.classList.add("err")
        message.classList.remove("suc")
        messageErr.textContent = "Message must be at least 10 characters"
        valid = false
    } else {
        message.classList.remove("err")
        message.classList.add("suc")
        messageErr.textContent = ""
    }

    // FINAL SUBMIT
    if (valid) {
        alert("Form submitted successfully 🎉")
        form.reset()

        name.classList.remove("suc")
        email.classList.remove("suc")
        message.classList.remove("suc")
    }
})
