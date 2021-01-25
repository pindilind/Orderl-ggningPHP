<?php 
require("./classes.php");



/* array med producter */
$products = [
    new Product("Iphone 11", 100000, "200g"),
    new Product("Huawei P20", 2000, "50g"),
    new Product("Sony S5", 7300, "150g")
];

try {
    session_start();

    //Kollar om en request har gjorts
    if(isset($_SERVER["REQUEST_METHOD"])) {

        if($_SERVER["REQUEST_METHOD"] === "POST") {
            //REQUEST_METHOD är POST

            if(isset($_SESSION["Products"])) {

                echo json_encode(false);
                exit;
            }

                
            } else {
               
                throw new Exception("No birthday is set to body... :( ", 500);
            }
       
        } else { 
            //denna visas om inget siffror va inkluderarde
            throw new Exception("Not a valid request...", 405);
        }

    
} catch (Exception $error) {
    echo json_encode(
        array(
            "Message" => $error -> getMessage(),
            "Status" => $error -> getCode()
        )
    );
    exit;
}


?>