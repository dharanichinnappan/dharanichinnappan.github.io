<?php include '../partials/databse.php';?>
<?php session_start(); ?>
<?php


$question_number = $_GET['n'];

$query = "SELECT * FROM QUESTIONS";
$result = $conn->query($query);
$total = $result->num_rows;

$query = "Select * from questions where id=$question_number";
$result = $conn->query($query);
$question = $result->fetch_assoc();

$query = "select option1,option2,option3,option4 from questions where id=$question_number";
$result = $conn->query($query);
$choices = $result->fetch_assoc();



?>

<html>
<head>
<title>QUESTIONS</title>

<link rel="stylesheet" href="../css/style.css" />
<link rel="stylesheet"
	href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<script
	src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>

</head>
<body>
	<div class="col-sm-12 col-md-12 col-lg-12 header">Multiple Choice Quiz</div>

	<div class="col-sm-12 col-md-12 col-lg-12 container">
		<div class="col-sm-12 col-md-12 col-lg-12 question_container">
			<div id="question">
        		<?php echo $question['question'];?>
        	</div>

			<form action="process.php" method="post">
    	<?php
    foreach ($choices as $value) {
        ?>   
         <div id="box" >
			<input type="radio" name="option" id="<?php echo $value; ?>" value="<?php echo $value; ?>" /> 
            <label for="<?php echo $value; ?>" class="pointer"> <?php echo $value;?>  </label>             
         </div>
            
      <?php
    }
    ?>
        <br /> <br />

				<div class="col-sm-8 col-md-8 col-lg-8">
					<div class="col-sm-4 col-md-4 col-lg-4">
						<input type="submit" value="prev" name="prev" id="prevButton" style="display:<?php echo $question_number!=1 ? 'block':'none' ?>" />
					</div>
					<div class="col-sm-4 col-md-4 col-lg-4">
						<input type="submit" value="next" name="next" id="nextButton" style="display:<?php echo $question_number<$total ? 'block':'none' ?>" />
					</div>
				</div>
				<div class="col-sm-4 col-md-4 col-lg-4">
					<input type="submit" value="submit" name="submit" id="submitButton" style="display:<?php echo $question_number==$total ? 'block':'none' ?>"/>
				</div>




				<input type="hidden" name="question_number"
					value="<?php echo $question_number; ?>" />

			</form>
		</div>
	</div>

	
	
</body>
</html>