<?php
  $host = "localhost";
  $username = "root";
  $password = "root";
  $dbname = "babe_scanner";
  $port = 8889;

  $con = mysqli_connect("$host:$port", $username, $password );

  if (!$con){
   die('Could not connect: ' . mysql_error());
  }

  if (mysqli_connect_errno()) {
      printf("Connect failed: %s\n", mysqli_connect_error());
      exit();
  }

  mysqli_select_db($con, $dbname);

?>
