<!DOCTYPE html>
<html>
    <head>

    </head>
    <body>
        <?php
            class Car{
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
            echo $herbie->model."<br>";
            echo strlen("hello world!")."<br>"; //outputs 12
            echo str_word_count("hello world!")."<br>"; //outputs 2
            $x = 5+5;
            echo var_dump($x)."<br>"; //dumps data type and content of the variable
            echo strrev("hello world!")."<br>"; //outputs the reverse of the string
            echo strpos("hello world", "world")."<br>";
            echo str_replace("world", "dolly", "hello world!");
            define("greeting", "welcome to UNG!");
            function myTest(){
                echo greeting;
            }
            myTest();
        ?>
    </body>
</html>