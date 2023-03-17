<!DOCTYPE html>
<html lang="en">
<head>
    <title>Register</title>
    <meta charset="utf-8">
    <link rel="stylesheet" href="..\accountSystem.css">
</head>

<body>
<div class = "container">
    <h1>Register</h1>
    <div class = "form">
    <form action="registerProcess.php" method="post">
        <input id = "formField" type="text" name="uname" placeholder="Enter username"><br>
        <input id = "formField" type="password" name="pword" placeholder="Enter password"><br>
        <input id = "formField" type="password" name="confirm_pword" placeholder="Confirm password"><br>
        <input id = "formButton" type="submit" value="Register">
    </form>
    </div>

<?php 
// Start the session
session_start();

// Runs if error has been found
if (isset($_SESSION['error'])){
    if ($_SESSION['error'] == "emptyfields"){
        echo "<p>Please fill all fields</p>";
    }
    elseif ($_SESSION['error'] == "notmatching"){
        echo "<p>Passwords do not match. Please try again</p>";
    }
    elseif ($_SESSION['error'] == "incorrectlength"){
        echo "<p>Username and password must be between 6 and 50 characters. Please try again</p>";
    }
    elseif ($_SESSION['error'] == "userexists"){
        echo "<p>That username has already been taken. Please try another</p>";
    }
    elseif ($_SESSION['error'] == "spaceexists"){ 
        echo "<p>Username and password must not contain spaces. Please try again</p>";
    }
    
    // Deletes session variables
    session_unset();
}
?>

<div><a>Already have an account? Login </a><a id = 'hereButton' href="..\login\loginpage.php">here</a></div>

</div>
</body>
</html>