$(document).ready(function() { 
 $("form#form").submit(function(event) {
  event.preventDefault();
  const name = $("input#name").val();
  const food = $("radio#food").val();
  const music = $("radio#music").val();
  const animal = $("radio#animal").val();
  const color = $("radio#color").val();
  const fun = $("radio#fun").val();

  if (food === 'thai' && music === 'rock') {
    $('#html').show();
  }

  });
});
