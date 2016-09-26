<?php
if( isset($_GET['row_id'])){
  $last_record = $_GET['row_id'];
  include('database-connection.php');
  // select from the database
  $query = "SELECT * FROM users ORDER BY id DESC LIMIT 1";

  if (!mysqli_query($con, $query)){
    die('Error: ' . mysqli_error($con));
  }else{
    $result = mysqli_query($con, $query);
    $row = mysqli_fetch_assoc($result);

    if ($last_record != $row['id'] ){
      $query_last = "SELECT * FROM users WHERE id > '$last_record' ORDER BY id LIMIT 1";

      $result_next = mysqli_query($con, $query_last);
      $row = mysqli_fetch_assoc($result_next);
      // print_r($row);
      echo json_encode($row);
    }else{
      return false;
    }
  }

  mysqli_close($con);

}
?>
