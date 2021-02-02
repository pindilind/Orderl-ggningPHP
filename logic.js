window.addEventListener("load", initsite)
document.getElementById("submitBtn").addEventListener("click", submitOrder)


function initsite() {
    seeProductsOnPage()
   
}

/* function för knappen "submit" */
async function submitOrder() {
    console.log("Hejhej")
} 

/* function för att skriva ut produkter på sidan */
async function seeProductsOnPage() {
    const productInput = document.getElementById("seeProduct")
    const productList = await request("./server/productReciever.php", "GET")
    console.log(productList)


    
    // Nytt sätt att skriva en for-loop på (skriver ut på sidan)
        productList.forEach((product) => {
        let productContainer = document.createElement("div")

        let nameText = document.createElement("h3")
        nameText.innerText = product.name

        let priceText = document.createElement("h5")
        priceText.innerText = product.price + " " + "kr"

        let weightText = document.createElement("h5")
        weightText.innerText = product.weight
        
        let cartButton = document.createElement("button")
        let buttonText = document.createElement("h3")
            buttonText.innerText = "Lägg till i kundvagnen"
            cartButton.data = product

        cartButton.onclick = function() {
            console.log(this.data)
            addToCart()
        }

        function addToCart() {
        
        
            let productToAdd = this.data
            let cart = JSON.parse(localStorage.getItem("cart"))

        if(!cart) {
            cart = []
        } else {
            cart = JSON.parse(cart)
        }

       let foundIndex =  cart.findIndex((cartItem) => {
            return cartItem.products.id == productToAdd.id
        }) 
        console.log(foundIndex)

        if(foundIndex != -1) {
            cart[foundIndex].quantity++
        } else {
            cart.push({
                product: productToAdd,
                quantity: 1
            })
        }

    

    }
       
        //Appendar till sidan
        productContainer.append(nameText, priceText, weightText, cartButton)
        cartButton.appendChild(buttonText)

        productInput.appendChild(productContainer)

        //Classlists för styling
        productContainer.classList = "productContainer"
        cartButton.classList = "cartButton"
        
    })

    /* Foreachloop  */
    productList.forEach((product) => {
        // Printa produktkort
        console.log(product)
    })

    
}


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


 /* formatet för 1 produkt i carten */
       