<?php
  $servername = "localhost";
  $username = "root";
  $password = "root";
  $dbname = "babe_scanner";

  $con = mysql_connect($servername,$username, $password);

  if (!$con){
   die('Could not connect: ' . mysql_error());
  }

  mysql_select_db($dbname, $con);

?>
