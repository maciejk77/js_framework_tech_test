// Simple solution based on id not on mf-model/bind as yet

$(function(){
  $('#mf-model').keydown(function(){
    setTimeout(function() {
      $('#mf-bind').text($('#mf-model').val());
    }, 50);
  });
});

