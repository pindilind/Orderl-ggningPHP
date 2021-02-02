<?php 

/* productlista (class) */
class Product {
    function __construct($id, $name, $price, $weight) {
        
        $this->id = $id;
        $this->name = $name;
        $this ->price = $price;
        $this ->weight = $weight;
    }

    /* metod */
    public $id;
    public $name;
    public $price;
    public $weight;
}

class Order {
    function __construct($orderDate, $product, $quantity, $totalPrice) {
        $this->orderDate = $orderDate;
        $this->product = $product;
        $this->quantity = $quantity;
        $this->totalPrice = $totalPrice;
    }

    public $orderDate;
    public $product;
    public $quantity;
    public $totalPrice;

}

?>