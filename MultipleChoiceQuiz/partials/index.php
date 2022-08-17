
<?php include '../partials/databse.php'; ?>
<?php
session_start();
$_SESSION['score'] = 0;
?>
<?php
$query = "SELECT * FROM QUESTIONS";
$result = $conn->query($query);
$total = $result->num_rows;

$query = "select * from userAnswers";
$result = $conn->query($query);

if ($result->num_rows > 0) {
    $query = "delete from userAnswers";
    $conn->query($query);
}
?>


<html>
<head>
<title>INDEX PAGE</title>

<link rel="stylesheet" href="../css/style.css" />
<script
	src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
</head>

<body>

	<div class="col-sm-12 col-md-12 col-lg-12 index">
		<div>
			<h1>PHP Quizzer</h1>
		</div>
		<div>
			<h2>Test your PHP Knowledge</h2>
		</div>
		<div>
			<p>This is a multiple choice quize to test your knowledge</p>
		</div>
		<div>
			<ul>
				<li><strong>Estimatd Time: </strong><?php echo $total*0.5; ?> minutes</li>
				<li><strong>Type: </strong>Multiple Choice</li>
				<li><strong>Estimatd Time: </strong><?php echo $total*0.5; ?> minutes
					<a href="questions.php?n=1" class="start">Start Quiz</a></li>

			</ul>


		</div>
	</div>










</body>

</html>
