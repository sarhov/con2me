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

$('.jsAdd').click(function(event) {
  event.preventDefault();
  $('.jsAddSection').fadeIn();
  $('body, html').addClass('overflow')
});

document.getElementById("customButton").addEventListener("click", function(){
  document.getElementById("fileUpload").click();  // trigger the click of actual file upload button
});

document.getElementById("fileUpload").addEventListener("change", function(){
  var fullPath = document.getElementById('fileUpload').value;
  var fileName = fullPath.split(/(\\|\/)/g).pop();  // fetch the file name
  document.getElementById("fileName").innerHTML = fileName;  // display the file name
}, false);