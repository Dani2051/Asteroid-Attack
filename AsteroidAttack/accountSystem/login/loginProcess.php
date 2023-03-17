<?php
    // Starts a session
    session_start();
    
    $server = "localhost";
    $username = "ddar";
    $password = "tjwa1234";
    $database = "AsteroidAttack";

    // Create connection
    $conn = mysqli_connect($server, $username, $password, $database);
    // Check connection
    if (!$conn) {
        echo("connection unsuccessful");
    }

    // Pulls in inputs from the login form and sets them as variables    
    $un = $_POST['uname'];
    $pw = $_POST['pword'];
    // Checks to see if any fields are empty 
    if ($un == "" or $pw == "" ){
      $_SESSION['error'] = "emptyFields";
      header('Location: loginpage.php'); // Redirects to login page
    } 
    $sql = "SELECT * FROM users WHERE username = '$un'";
    $result = mysqli_query($conn, $sql); // Performs query on database

    // Checks to see if any fields are empty 
    if ($un == "" or $pw == ""){
      $_SESSION['error'] = "emptyFields";
      header('Location: loginpage.php'); // Redirects to login page
    } 
    // Checks to see if any fields contains spaces 
    elseif (preg_match('/\s/',$un) or preg_match('/\s/',$pw)){
        $_SESSION['error'] = "spaceExists";
        header('Location: loginpage.php'); // Redirects to login page
    }
    // Checks to see if there are any rows that match 
    elseif (mysqli_num_rows($result) == 1) { 
      // Selects the users password from the database 
      $storedpass = mysqli_fetch_assoc($result)['password'];

      // Compares the stored pass with the entered password 
      $verified = password_verify($pw, $storedpass);

      // Runs if the passwords match 
      if (($verified) == 1) {
        // Selects userID from database
        $userPlayingID = mysqli_fetch_assoc($result)['userID'];
        header("Location: /~ddar/AsteroidAttack/game"); // Redirects to game page
      }
      else { // Runs if the passwords do not match 
        $_SESSION['error'] = 'invalidDetails';  
        header('Location: loginpage.php'); // Redirects to login page
      } 
    } 
    else { // Runs if user does not exist 
      $_SESSION['error'] = 'noUser';  
      header('Location: loginpage.php'); // Redirects to login page
    }

mysqli_close($conn); // Closes connection    
?>