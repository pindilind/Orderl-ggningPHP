<?php
require("./classes.php");

try {
    //För att använda $_SESSION
    session_start();

    //kollar om requesten är gjord
    if(isset($_SERVER["REQUEST_METHOD"])) {

        if($_SERVER["REQUEST_METHOD"] === "GET") {

        } else if ($_SERVER["REQUEST_METHOD"] == "POST") {
HÄR ÄR JAG ! 
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

    } 
    
} catch (Exception $error) {
    echo json_encode(
        array(
            "Message" => $error -> getMessage(),
            "Status" => $error -> getCode()
        )
    );
    exit;
} */

?>