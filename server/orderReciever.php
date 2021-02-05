<?php
require("./productHelper.php");

try {
    //För att använda $_SESSION
    session_start();

    //kollar om requesten är gjord
    if(isset($_SERVER["REQUEST_METHOD"])) {

        //hämtar ordrar
        if($_SERVER["REQUEST_METHOD"] === "GET") {
          
            if(!isset($_SESSION["orders"])) {
                echo json_encode(false);
                exit;

            } 
        echo json_encode(unserialize($_SESSION["orders"]));

        //lägga till ny order
        } else if ($_SERVER["REQUEST_METHOD"] == "POST") {

            $allProducts = getAllProducts();

           $cartItems = JSON_decode($_POST["cartItem"]);

           //forech etirerar bland produkterna och lägger till
           $orderItem = [];
        
        $foundProduct = null;
        foreach($cartItems as $cartItem) {

            foreach($allProducts as $product) {
                if($product->id == $cartItem->product) {
                   $foundProduct = $product;
                   break; 
                } 
            }
            //skapat order
        array_push($orderItem, new OrderItem($foundProduct, $cartItem->quantity));
    
        }

        $order = new Order($orderItem);

        //kollar om ORDER finns sparat och pushar
        $savedOrders = [];
        if(isset($_SESSION["orders"])) {
            $savedOrders = unserialize($_SESSION["orders"]);
        }
        array_push($savedOrders, $order);

        //sparar order
        $_SESSION["orders"] = serialize($savedOrders);

            echo JSON_encode(true);
        } 
    }

           /*  if(isset($_SESSION["products"])) {

                echo json_encode(false);
                exit;
            }

            //kollar om det finns sparat på body
            if(isset($_POST["name"],$_POST["price"],$_POST["weight"]))  {
                
               

                if(empty($myOrder)) {
                    throw new Exception("Horoscope could not be calculated");
                }

                //sparar $_POST horoscope går till session
                $_SESSION["products"] = serialize($myOrder);
                
                echo json_encode(true);
                exit;
                
            } else {
               
                throw new Exception("Not working :( ", 500);
            }
       
        } else { 
            //denna visas om inget siffror va inkluderarde
            throw new Exception("Not a valid request...", 405);
        }

    } */
    
} catch (Exception $error) {
    echo json_encode(
        array(
            "Message" => $error -> getMessage(),
            "Status" => $error -> getCode()
        )
    );
    exit;
}
