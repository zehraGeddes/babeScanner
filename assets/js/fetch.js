$(document).ready(function(){
  var last_id = 1;
  (function worker() {
    $.ajax({
      url: 'fetch-babes.php',
      data : {
         row_id : last_id // will be accessible in $_POST['data1']
      },
      dataType:"json",
      success: function(data) {
        last_id = data['id'];
        $('.result').append(data['name']);
      },

      complete: function() {
        // Schedule the next request when the current one's complete
        setTimeout(worker, 5000);
      }
    });
  })();
});
