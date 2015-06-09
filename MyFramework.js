$(function(){
  $('[mf-model]').keydown(function(){
    setTimeout(function() {
      $('[mf-bind]').text($('[mf-model]').val());
    }, 50);
  });
});
