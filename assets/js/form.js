$(document).ready(function(){
  $("#babeForm").submit(function(e) {
    e.preventDefault();
    $form = $(this);
    var url = $form.attr('action'); // the script where you handle the form input.

    $.ajax({
       type: $form.attr('method'),
       url: url,
       data: $form.serialize(), // serializes the form's elements.
       success: function(data)
       {
           alert(data); // show response from the php script.
       }
     });
  });
});
