<?php
/* 
Name(s): Trevor Crow
Date: 12/2/2018
Description: validates data recieved, then inputs it into the database, then it outputs percentage correct
*/
    $fname=$lname=$email=$fq=$sq=$tq="";
    $id = -1;
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "webprogrammingdb";

    //test data
    if($_SERVER["REQUEST_METHOD"] == "POST"){
        $id = $_POST["id"];
        $fname = test_input($_POST["fname"]);
        $lname = test_input($_POST["lname"]);
        $email = test_input($_POST["email"]);
        $fq = test_input($_POST["fq"]);
        $sq = test_input($_POST["sq"]);
        $tq = test_input($_POST["tq"]);
    }
    function test_input($data){
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);
    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    } 

    //grab key to check how many the person got correct
    $sql = "SELECT fq, sq, tq, correct_answers FROM quiz_takers WHERE studentid='000000'";
    $result = $conn->query($sql);
    $row = $result->fetch_assoc();
    $correct = 0;
    if($fq == $row["fq"]){
        $correct++;
    }
    if($sq == $row["sq"]){
        $correct++;
        echo "p2";
    }
    if($tq == $row["tq"]){
        $correct++;
    }
    //insert test takers data with correct answers into it
    $sql = "INSERT INTO quiz_takers(studentid, fname, lname, email, fq, sq, tq, correct_answers) VALUES(".$id.", '".$fname."', '".$lname."', '".$email."', '".$fq."', '".$sq."', '".$tq."', ".$correct.")";
    if($conn->query($sql) === false){ //update correct_answers for studentid
        echo "Error creating Record: ".$conn->error;
    }

    echo "
    <!DOCTYPE html>
    <head>
    <style> ";
    include "layout.css";
    echo "</style>
    </head>
    <body>
    <form class='col-12'>
    <h1>You scored ".$correct." out of ".$row["correct_answers"]." correct</h1>
    </form>
    </body>
    ";

    $conn->close();
?>