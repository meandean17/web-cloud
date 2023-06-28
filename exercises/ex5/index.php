<?php 
    include "config.php";
?>
<?php  
    if(!empty($SERVER['QUERY_STRING']))
        $cat = $_GET['category'];
    else
        $cat = 'All';
    
    $query = "SELECT * FROM tbl_73_books";
    if($cat != 'All')
        $query .= " WHERE category = '$cat'";
    $result = mysqli_query($connection, $query);
    if(!$result)
        die("DB query failed.");
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="./css/stylesheet.css">
    <title>Bookstore</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Gentium+Book+Plus:ital,wght@0,400;0,700;1,400;1,700&display=swap');
    </style>
</head>
<body>
    <header class="header-1">
        <a href="./index.php">
            Dean's Book Corner
        </a>
    </header>
    <main>
        <div class="content-wrapper">
            <div class="book-grid">
                <?php 
                    $i = 0;
                    while ($row = mysqli_fetch_assoc($result)) 
                    {
                        if($i % 3 == 0) {
                            echo '<div class="book-row">';
                        } 
                        $img = $row["img_url"];
                        if(!$img) $img = "images/default.jpg";
                        echo '<section class="book-data">';
                        echo '<div class="shorthand-container"><div class="book-shorthand"><a href="book_page.php?book_id=' . $row["id"] . '">' . $name = $row["name"] . ' | ' . $rating = $row["rate"] . '</a></div></div>';
                        echo '<a href="book_page.php?book_id=' . $row["id"] . '">';
                        echo '<img class="book-img" src="' . $img . '" class="bookImg">';
                        echo '</a>';
                        echo '</section>';
                        if($i % 3 == 2) {
                            echo '</div>';
                        }
                        $i++;
                    }
                    if($i % 3 != 0) echo '</div>';
                    
                ?>
                <?php 
					mysqli_free_result($result);
				?>
            </div>      
        </div>
    </main>
</body>
</html>
<?php
    mysqli_close($connection);
?>