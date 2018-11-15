<?php
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "test";
    //create connection
    $conn = new mysqli($servername,$username,$password, $dbname);
    //check connection
    if($conn->connect_error){
        die("Connection failed: ".$conn->connect_error);
    }
    echo "Connected successfully";
    //create table
    $sql = "CREATE TABLE MyGuest(id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
            firstname varchar(30) not null,
            lastname varchar(30) not null,
            email varchar(50),
            reg_date TIMESTAMP
    )";
    if($conn->query($sql) === true){
        echo "Table created successfully";
    }else{
        echo "Error creating Table: ".$conn->error;
    }
    $stmt = $conn->prepare("INSERT INTO MyGUests(firstname, lastname, email) VALUES(?, ?, ?)");
    $firstname = "Celena";
    $lastname = "Crow";
    $email = "Celena.E.Crow@gmail.com";
    $stmt->bind_param("sss", $firstname, $lastname, $email);
    if($conn->query($sql) === true){
        $last_id = $conn->insert_id;
        echo "Record created successfully";
    }else{
        echo "Error creating Record: ".$conn->error;
    }

    $stmt->close();
    $conn->close();
?>