
window.addEventListener("load", initsite)
/* document.getElementById("submitBtn").addEventListener("click", submitOrder) */


function initsite() {
    renderCart()

}
//skapar en order-knapp
let orderBtn = document.createElement("button")
let orderBtnText = document.createElement("h3")
orderBtnText.innerText = "Lägg order"
seeProduct.appendChild(orderBtn)
orderBtn.appendChild(orderBtnText)

orderBtn.onclick = function () {
    placeOrder()
}

async function placeOrder() {

    const cart = JSON.parse(localStorage.getItem("cart"))
    const formattedCart = cart.map((cartItem) => {
        return {
            product: cartItem.product.id,
            quantity: cartItem.quantity
        }
    })
    console.log(formattedCart)
    const body = new FormData()
    body.append("")

    const superStatus = await request("./server/orderReciever-php", "POST", body)

}


async function renderCart() {
    const seeProduct = document.getElementById("seeProduct")
    let cart = JSON.parse(localStorage.getItem("cart"))
    console.log(cart)

    if (!cart) {
        let emptyCart = document.createElement("h3")
        emptyCart.innerText = "Inga produkter i kundkorgen"
        seeProduct.appendChild(emptyCart)
    }

    // Nytt sätt att skriva en for-loop på (skriver ut på sidan)
    cart.forEach((cartItem) => {
        let productContainer = document.createElement("div")

        let quantityText = document.createElement("h5")
        quantityText.innerText = "Antal: " + cartItem.quantity

        let nameText = document.createElement("h3")
        nameText.innerText = cartItem.product.name

        let priceText = document.createElement("h5")
        priceText.innerText = cartItem.product.price + " " + "kr"

        let weightText = document.createElement("h5")
        weightText.innerText = cartItem.product.weight

        let deleteBtn = document.createElement("button")
        let buttonText = document.createElement("h3")
        buttonText.innerText = "Ta Bort"
        deleteBtn.data = cartItem

        //knapp för att TA BORT till i localstorage, addventlistner
        deleteBtn.onclick = function () {
            console.log("Raderad")
        }



        //Appendar till sidan
        productContainer.append(quantityText, nameText, priceText, weightText, deleteBtn)
        deleteBtn.appendChild(buttonText)

        seeProduct.appendChild(productContainer)

        //Classlists för styling
        productContainer.classList = "productContainer"
        deleteBtn.classList = "deleteBtn"

    })


    //request funktion 
    async function request(path, method, body) {
        try {
            const response = await fetch(path, {
                method,
                body
            })
            console.log(response)
            return response.json()
        } catch (err) {
            console.error(err)
        }
    }


}