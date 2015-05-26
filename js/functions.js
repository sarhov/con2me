console.log('I\'m ready');

$('.jsOpenNav').click(function(event) {
  event.preventDefault();
  $('.jsNav').toggle();
  $('.jsBar').toggleClass('is-active');
  $('body').toggleClass('offMenu');
}); 
