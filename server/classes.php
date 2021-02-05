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

class OrderItem {
    function __construct($product, $quantity) {
        $this->product = $product;
        $this->quantity = $quantity;
    }
    public $product;
    public $quantity;


    }


class Order {
    function __construct($orderItem) {
        $this->orderItem = $orderItem;
    }

    public $orderItem;

  
}

/* function calculatePrice() {
        $totalprice = [];
        foreach($this->product as $product) {
            array_push($totalprice, $product->price);
        }
    return array_sum($totalprice) . "kr";
    }
 */
?>

