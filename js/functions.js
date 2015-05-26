console.log('I\'m ready');

$('.jsOpenNav').click(function(event) {
  event.preventDefault();
  $('.jsCanvas').toggleClass('is-open');
  $('body').toggleClass('overflow')
}); 
