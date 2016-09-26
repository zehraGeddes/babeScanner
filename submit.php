<?php
  if( $_POST ){

    include('database-connection.php');

    $babe_name = mysqli_real_escape_string($con, $_POST['name']);

    $query = "INSERT into users (name) VALUES ('$babe_name')";

    if (!mysqli_query($con, $query)){
     die('Error: ' . mysqli_error($con));
   }else{
     echo "thank you";
   }

    mysqli_close($con);

  }
?>
