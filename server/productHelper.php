<?php 

require("./classes.php");

function getAllProducts() {
    return [
    /* array med producter */
    new Product(1,"Iphone 11", 10000, "200g"),
    new Product(2,"Huawei P20", 2000, "50g"),
    new Product(3,"Sony S5", 7300, "150g"),
    new Product(4,"Nokia 3310", 2000, "500g"),
    new Product(5,"Iphone 12", 13999, "150g")   
    ];

    }


?>