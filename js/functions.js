console.log('I\'m ready');

$('.jsOpenNav').click(function(event) {
  event.preventDefault();
  $('.jsNav').toggle();
  $('.jsBar').toggleClass('is-active');
  $('body').toggleClass('offMenu');
}); 

$('.jsMenuItem').click(function(event) {
  event.preventDefault();
  $(this).toggleClass('is-checked');
  if ($(this).hasClass('jsMenuItemMain')) {
    if ($(this).hasClass('is-checked')) {
      $('.jsMenuItem').addClass('is-checked');
    }
    else{
      $('.jsMenuItem').removeClass('is-checked');
    }
  };
});