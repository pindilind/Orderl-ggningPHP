<?php 
require("./classes.php");



/* array med producter */
    $products = [
    new Product("Iphone 11", 100000, "200g"),
    new Product("Huawei P20", 2000, "50g"),
    new Product("Sony S5", 7300, "150g")
];

/* $productToOrder = [];

foreach ($products as $product) {
    array_push($productToOrder, 
    new Product($product["name"], $product["price"], $product["weight"]));
}  */




try {
    session_start();

   //Kollar om en request har gjorts
   if (isset($_SERVER["REQUEST_METHOD"])) {

    if ($_SERVER["REQUEST_METHOD"] === "GET") {
        //REQUEST_METHOD is GET
       
        
            echo json_encode($products);
            exit;
        } else {
            //skickar feedback att inga producter är sparat
            echo json_encode("Not working :(");
            exit;
        }
    } else {
        throw new Exception("Not a valid request...", 405);
    }
} catch (Exception $error) {
echo json_encode(
    array(
        "Message" => $error->getMessage(),
        "Status" => $error->getCode()
    )
);
exit;
}


?>