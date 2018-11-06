<!-- htmlspecialchar -->
<!-- trim -->
<!-- stripslashes -->
<!DOCTYPE html>
<html>
    <head>

    </head>
    <body>
        <?php
            $name=$email=$gender=$comment=$website="";
            if($_SERVER["REQUEST_METHOD"] == "POST"){
                $name = test_input($_POST["name"]);
                $email = test_input($_POST["email"]);
                $gender = test_input($_POST["gender"]);
                $comment = test_input($_POST["comment"]);
                $website = test_input($_POST["website"]);
            }
            function test_input($data){
                $data = trim($data);
                $data = stripslashes($data);
                $data = htmlspecialchars($data);
                return $data;
            }
        ?>
        <h2>PHP Form validation</h2>
        <form method="post" action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']); ?>">
            Name: <input type="text" name="name"><br><br>
            E-mail: <input type="text" name="email"><br><br>
            Website: <input type="text" name="website"><br><br>
            Comment: <textarea name="comment" rows="5" cols="40"></textarea><br><br>
            Gender: <input type="radio" value="male" name="gender"> Male
            <input type="radio" value="female" name="gender"> Female<br><br>
            <input type="submit" name="submit">
        </form>
        
        <?php
            echo "<h1>Your input</h1>";
            echo $name."<br>".$email."<br>".$website."<br>".$comment."<br>".$gender;
        ?>
    </body>
</html>