

<?php include '../partials/databse.php'; ?>
<?php session_start(); ?>

<?php


if (! isset($_SESSION['score'])) {
    $_SESSION['score'] = 0;
}


$question_number = $_POST['question_number'];

$next_question_number = $question_number + 1;

$selected_option = $_POST['option'];
//$selected_option = substr($selected_option, - 1);

$query = "SELECT * FROM QUESTIONS";
$result = $conn->query($query);
$total = $result->num_rows; 
$_SESSION['total'] =$total;

$query = "Select correctAnswer from questions where id=$question_number";
$result = $conn->query($query);
$row = $result->fetch_assoc();
$correct_choice = $row['correctAnswer'];

$query = "select question from questions where id=$question_number";
$result = $conn->query($query);
$row = $result->fetch_assoc();
$question = $row['question'];

$query="select * from userAnswers where questionNumber=$question_number";
$result=$conn->query($query); 
if($result->num_rows==1){
    $query="update userAnswers set selectedAnswer='$selected_option' where questionNumber=$question_number";
    $conn->query($query);
}
else{
    $query = "insert into userAnswers (questionNumber,question,selectedAnswer,correctAnswer) values ($question_number,'$question','$selected_option','$correct_choice')";
    $conn->query($query); 
}



if ($correct_choice == $selected_option) {
    $_SESSION['score'] ++;
}

if ($total == $question_number) {
    if ($_POST["submit"]) {
        header("Location:score.php");
    } elseif ($_POST["prev"]) {
        $next_question_number=$next_question_number-2;
        header("Location:questions.php?n=" . $next_question_number . "");
    }
    
    
       
}
else {
    if ($_POST["next"]) {
        header("Location:questions.php?n=" . $next_question_number . "");
    } elseif ($_POST["prev"]) {
        $next_question_number=$next_question_number-2;
        header("Location:questions.php?n=" . $next_question_number . "");
    }
    
 
}

?>

