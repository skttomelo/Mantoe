<?php
/* 
Name(s): Trevor Crow
Date: 12/2/2018
Description: ****THIS NEEDS TO BE ACCESSED FIRST**** creates database, table, and inserts instructor data into table
*/
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "webprogrammingdb";

    // Create connection
    $conn = new mysqli($servername, $username, $password);
    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    } 

    // create database
    $sql = "CREATE DATABASE ".$dbname;
    if($conn->query($sql) === true){
        echo "Database created successfully";
    }else{
        echo "error creating database ".$conn->error;
    }
    $conn->close();
    
    //set database
    $conn = new mysqli($servername, $username, $password, $dbname);
    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    } 


    //create table
    $sql = "CREATE TABLE quiz_takers(
    studentid INT(6) UNSIGNED PRIMARY KEY, 
    fname varchar(30),
    lname varchar(30),
    email varchar(50),
    fq varchar(1),
    sq varchar(1),
    tq varchar(1),
    correct_answers int(1)
    )";
    if ($conn->query($sql) === TRUE) {
        echo "Table quiz_takers created successfully";
    } else {
        echo "Error creating table: " . $conn->error;
    }

    //insert instructor data with correct answers into it
    $sql = "INSERT INTO quiz_takers(studentid, fname, lname, email, fq, sq, tq, correct_answers) VALUES(0, 'instructor', 'instructor', 'instr@ung.edu', 'C', 'A', 'A', 3)";
    $conn->query($sql);

    $conn->close();

    ob_start();
    header('Location: crow_hw_8.html');
    ob_end_flush();
    die();
?>