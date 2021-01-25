<?php 

/* productlista (class) */
class Product {
    function __construct($name, $price, $weight) {

        $this->name = $name;
        $this ->price = $price;
        $this ->weight = $weight;
    }
    
    /* metod */
    public $name;
    public $price;
    public $weight;
}


?>