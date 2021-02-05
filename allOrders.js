window.addEventListener("load", initsite)


async function initsite() {
    const orders = await request("./server/orderReciever.php", "GET")
    console.log(orders)
    renderOrders(orders)
}



 function renderOrders(orders) { 
    let mainElement = document.getElementsByTagName("main")[0]

    if (!orders) {
        let emptyOrder = document.createElement("h3")
        emptyOrder.innerText = "Inga ordrar gjorda..."
        mainElement.appendChild(emptyOrder)
    }


    orders.forEach((orders) => {

        orderBox = document.createElement("div")
    
        let table = document.createElement("table")

        let tableHeaderRow = document.createElement("tr")

        let tableHeadName = document.createElement("th")
        tableHeadName.innerText = "Name"

        let tableHeadPrice = document.createElement("th")
        tableHeadPrice.innerText = "Price"

        let tableHeadWeight = document.createElement("th")
        tableHeadWeight.innerText = "Weight"

        let tableHeadQuantity = document.createElement("th")
        tableHeadQuantity.innerText = "Quantity"
        table.append(tableHeadName, tableHeadPrice, tableHeadWeight, tableHeadQuantity)
        table.append(tableHeaderRow)

    
        orders.orderItem.forEach((orderItem) => {
            
           let tableProductRow = document.createElement("tr")
           
            let tableDescName = document.createElement("td")
            tableDescName.innerText = orderItem.product.name

            let tableDescPrice = document.createElement("td")
            tableDescPrice.innerText = orderItem.product.price + " kr"
            
            let tableDescWeight = document.createElement("td")
            tableDescWeight.innerText = orderItem.product.weight

            let tableDescQuantity = document.createElement("td")
            tableDescQuantity.innerText = orderItem.quantity

            tableProductRow.append(tableDescName, tableDescPrice, tableDescWeight, tableDescQuantity)
            table.append(tableProductRow)
        })


        mainElement.append(table)
        });
}

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