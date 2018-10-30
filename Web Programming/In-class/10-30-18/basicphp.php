<!DOCTYPE html>
<html>
    <head>

    </head>
    <body>
        <?php
            class Car(){
                function Car(){
                    $this->model = "VW";
                }
            }
            echo "My first PHP script!";
            echo "<h1>Sup bitch</h1>";
            print "My last PHP line <br>";
            $color = "blue";
            echo "the car is ".$color."<br>";
            $herbie = new Car();
            echo $herbie->model;
        ?>
    </body>
</html>