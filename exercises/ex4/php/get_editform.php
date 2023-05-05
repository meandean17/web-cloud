<!DOCTYPE html>
<html>
<head>
    <title>Forms</title>
</head>
<body>
    <h2>
    Order recieved! 
    <br><br>
    Order details:<br>
    </h2>
    Phone number: <?php echo $_GET["phone"]; ?> <br>

    Items: <br>    
    <? foreach($_GET['items'] as $value)
    {
        echo $value . ', ';
    } ?> <br>

    Address: <?php echo $_GET["address"]; ?>

    <h3>
        Your order will arrive in 45 minutes. 
    </h3>
</body>
</html>