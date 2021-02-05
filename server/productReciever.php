<?php


try {

    require("./productHelper.php");

    session_start();

    //Kollar om en request har gjorts
    if (isset($_SERVER["REQUEST_METHOD"])) {

        if ($_SERVER["REQUEST_METHOD"] === "GET") {
            //REQUEST_METHOD is GET

            echo json_encode(getAllProducts());

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
