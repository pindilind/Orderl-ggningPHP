window.addEventListener("load", initsite)
/* document.getElementById("submitBtn").addEventListener("click", submitOrder) */


function initsite() {
    seeProductsOnPage()
}


    /**/
   /*  async function getProducts() {
    console.log("test GET")
    const products = document.getElementById("seeproduct")

    const viewProduct = await request("./server/productReciever.php", "GET")
    console.log(viewProduct)
    products.innerText = viewProduct

} */


async function seeProductsOnPage() {
    const productInput = document.getElementById("seeProduct")
    const viewProduct = await request("./server/productReciever.php", "GET")
    console.log(viewProduct)
    productInput.innerText = viewProduct
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
