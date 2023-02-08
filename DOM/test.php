<?php

$myObj = new stdClass();
$myObj->name = "John";
$myObj->age = 30;
$myObj->city = "New York";

class Etudiant{
	public $name = "";
    public $age = 0;
    
    public function __construct($name, $age){
    	$this->name = $name;
        $this->age = $age;
    }

    public function getName(){
        return $this->name;
    }
    public function getAge(){
        return $this->age;
    }
}

$myJSON = json_encode($myObj) ;
$etu = new Etudiant("Hassan", 23);
echo $etu->getName(). "\n";
$etuJSON = json_encode(get_object_vars($etu));

echo $myJSON;
echo "\n" . $etuJSON;

