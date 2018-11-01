<!DOCTYPE html>
<html>
    <head>

    </head>
    <body>
    <form action='' method='post'>
    <h1>Enter a String and we will tell you if it is a palidrome</h1><br>
    <input type=text name='string'>
    <button type=submit name='submit'>Submit</button>
    </form>
        <?php
            if (isset($_POST['string'])) {
                $reversed = strrev($_POST['string']);
                if(strpos($reversed,$_POST['string']) !== false){
                    echo "<p>They are the same</p>";
                }else{
                    echo "<p>They are not the same</p>";
                };
            }
        ?>
    </body>
</html>