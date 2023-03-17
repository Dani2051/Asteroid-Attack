<!DOCTYPE html>
<html lang="en">
<head>
    <title>Login</title>
    <meta charset="utf-8">
    <link rel="stylesheet" href="..\accountSystem.css">
</head>

<body>
<div class = "container">
    <h1>Login</h1>
    <div class = "form">
    <form action="loginProcess.php" method="post">
        <input id = "formField" type="text" name="uname" placeholder="Enter username"><br>
        <input id = "formField" type="password" name="pword" placeholder="Enter password"><br>
        <input id = "formButton" type="submit" value="Login">
    </form> 
    </div>
   
<?php 
// Start the session
session_start();

// Runs if error has been found
if (isset($_SESSION['error'])){
    if ($_SESSION['error'] == 'noUser'){
        echo "<p>That user does not exist. Please try again </p>";
    }
    elseif ($_SESSION['error'] == 'invalidDetails'){
        echo "<p>Password incorrect. Please try again</p>";
    }
    elseif ($_SESSION['error'] == "emptyfields"){
        echo "<p>Please fill all fields</p>";
    }
    elseif ($_SESSION['error'] == "spaceexists"){ 
        echo "<p>Username and password must not contain spaces. Please try again</p>";
    }
    
    // Deletes session variables
    session_unset();
}
?>

<div><a>Don't have an account? Create one </a><a id = 'hereButton' href="..\register\registerpage.php">here</a></div>

</div>
</body>
</html>