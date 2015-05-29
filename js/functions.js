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

//add a function to jQuery so we can call it on our jQuery collections
$.fn.capitalize = function () {

    //iterate through each of the elements passed in, `$.each()` is faster than `.each()
    $.each(this, function () {

        //split the value of this input by the spaces
        var split = this.value.split(' ');

        //iterate through each of the "words" and capitalize them
        for (var i = 0, len = split.length; i < len; i++) {
            split[i] = split[i].charAt(0).toUpperCase() + split[i].slice(1);
        }

        //re-join the string and set the value of the element
        this.value = split.join(' ');
    });
    return this;
};

//when the user presses a key and the value of the `textarea` is changed, the new value will have all capitalized words
$('#offer_name').on('keyup', function () {
    $(this).capitalize();
}).capitalize();//also capitalize the `textarea` element(s) on initialization

document.getElementById("customButton").addEventListener("click", function(){
  document.getElementById("fileUpload").click();  // trigger the click of actual file upload button
});

document.getElementById("fileUpload").addEventListener("change", function(){
  var fullPath = document.getElementById('fileUpload').value;
  var fileName = fullPath.split(/(\\|\/)/g).pop();  // fetch the file name
  document.getElementById("fileName").innerHTML = fileName;  // display the file name
}, false);