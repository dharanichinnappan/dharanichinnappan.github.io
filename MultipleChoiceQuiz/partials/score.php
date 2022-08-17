<html>
<head>
<title>RESULT</title>

<link rel="stylesheet" href="../css/style.css" />

</head>


<?php include '../partials/databse.php';?>
<?php
session_start();

session_destroy();
$array = array();
$query = "select * from userAnswers ";
$result = $conn->query($query);

while ($row = $result->fetch_assoc()) {
    $array[] = $row; 
    
}


?>
<div><h2>YOUR SCORE:<?php echo $_SESSION['score'];?>/<?php echo $_SESSION['total']?></h2></div>
<div>
	<table >
		<tr >
			<th>S.NO</th>
			<th>QUESTION</th>
			<th>YOUR ANSWER</th>
			<th>CORRECT ANSWER</th>
			<th>RESULT</th>
		</tr>
		<?php
            foreach ($array as $item) {
        ?>
		<tr>
			<td><?= $item['questionNumber'] ?></td>
			<td><?=  $item['question'] ?></td>
			<td><?=  $item['selectedAnswer'] ?></td>
			<td><?=  $item['correctAnswer'] ?></td>
			<td id="correct" style="display:<?php echo $item['selectedAnswer']==$item['correctAnswer'] ? 'block':'none' ?>">CORRECT</td>
			<td id="wrong" style="display:<?php echo $item['selectedAnswer']!=$item['correctAnswer'] ? 'block':'none' ?>">WRONG</td>
		</tr>
		<?php
        }
        ?>
	</table>
</div>

<div>
	<a href="questions.php?n=1" name="testAgain"  class="start">Take Test Again</a>
</div>
</html>