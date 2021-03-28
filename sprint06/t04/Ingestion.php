<?php


class Ingestion
{
    public $id;
    public $meal_type;
    public $day_of_diet;
    public $products = array();
    
    public function __construct($meal_type, $day_of_diet)
    {
        $this->meal_type = $meal_type;
        $this->day_of_diet = $day_of_diet;
    }

    public function get_from_fridge($product)
    {
        if ($this->products[$product]->getKcal() > 200)
            throw new EatException();
        else return;
    }

    public function getProducts(): array
    {
        return $this->products;
    }
    
    public function setProduct(Product $product)
    {
        $this->products[$product->name] = $product;
    }

}