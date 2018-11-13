<?php
    $servername = "localhost";
    $username = "root";
    $password = "";
    //create connection
    try{
        $conn = new PDO("mysql:host=$servername;dbname=flash_flood_beverages", $username,$password);
        //set the PDO error mode to exception
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        echo "Connected Successfully";

    }catch(PDOException $e){
        echo "Connection failed: ".$e->getMessage();
    }
    $conn = null;
?>