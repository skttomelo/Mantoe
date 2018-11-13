<?php
    $servername = "localhost";
    $username = "root";
    $password = "";
    //create connection
    $conn = new mysqli($servername,$username,$password);
    //check connection
    if($conn->connect_error){
        die("Connection failed: ".$conn->connect_error);
    }
    echo "Connected successfully";
    //create database
    $sql = "CREATE DATABASE myDB";
    if($conn->query($sql) === true){
        echo "Database created successfully";
    }else{
        echo "Error creating database: ".$conn->error;
    }

    $conn->close();
?>