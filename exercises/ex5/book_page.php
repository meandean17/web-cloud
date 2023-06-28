<?php 
	include "config.php";
?>
<?php 
	$prodId = $_GET["book_id"];
	$query 	= "SELECT * FROM tbl_73_books WHERE id=" . $prodId;
	
	$result = mysqli_query($connection, $query);
	if($result) {
		$row 	= mysqli_fetch_assoc($result);
	}
	else die("DB query failed.");
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="./css/stylesheet.css">
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Gentium+Book+Plus:ital,wght@0,400;0,700;1,400;1,700&display=swap');
    </style>
    <title>Bookstore</title>
</head>
<body>
    <header class="header-1">
        Dean's Book Corner
    </header>
    <main>
        <div class="book-content-wrapper">
            <div class="return-button-area">
                <a href="./index.php" class="btn btn-primary">
                    Back
                </a>
            </div>
            <div class="book-content">
            <?php 
				$img = $row["img_url"];
				if(!$img) $img = "images/default.jpg";
				echo '<img class="book-img-large" src="' . $img . '">';
				?> 
				<?php 
					mysqli_free_result($result);
				?>
            </div>
            <div class="book-info"></div>
        </div>
    </main>
    
</body>
</html>