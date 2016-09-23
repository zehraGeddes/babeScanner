<?php
  if( $_POST ){
    require_once('database-connection.php');

    $name = mysql_real_escape_string($_POST['name']);

    $query = "
INSERT INTO `users`.`comments` (`id`, `name`, `email`, `website`,
       `comment`, `timestamp`, `articleid`) VALUES (NULL, '$users_name',
       '$users_email', '$users_website', '$users_comment',
       CURRENT_TIMESTAMP, '$articleid');";

  }
?>
