window.addEventListener("load", initsite)


function initsite() {
    seeProductsOnPage()

}



// function för att skriva ut produkter på sidan
async function seeProductsOnPage() {
    const seeProduct = document.getElementById("seeProduct")
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

        //knapp för att lägga till i localstorage
        cartButton.addEventListener("click", addToCart) 


        //Appendar till sidan
        productContainer.append(nameText, priceText, weightText, cartButton)
        cartButton.appendChild(buttonText)

        seeProduct.appendChild(productContainer)

        //Classlists för styling
        productContainer.classList = "productContainer"
        cartButton.classList = "cartButton"

    })

    //funktion för att lägga till i localstorage
    function addToCart() {

        let productToAdd = this.data
        console.log(productToAdd)
        let cart = localStorage.getItem("cart")
        console.log(cart)
       if(!cart) {
            cart = []
        }else {
            cart = JSON.parse(cart)
        }

        let foundIndex = cart.findIndex((cartItem) => {
            return cartItem.product.id == productToAdd.id
        })
    

        if(foundIndex != -1) {
            cart[foundIndex].quantity++
        
        } else {
        cart.push({
            product: productToAdd,
            quantity: 1
        })
    }
        
     localStorage.setItem("cart", JSON.stringify(cart))
    
    }


    /* Foreachloop  */
    /* productList.forEach((product) => {
        // Printa produktkort
        console.log(product)
    })


}
 */

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