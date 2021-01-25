window.addEventListener("load", initsite)
document.getElementById("submitBtn").addEventListener("click", submitOrder)


function initsite() {
}

async function submitOrder() {
    const productInput = document.getElementById("seeProduct")
    const viewProduct = await request("./server/productReciever.php", "POST")
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
