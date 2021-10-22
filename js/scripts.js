$(document).ready(function($) { 
  $("form#form").submit(function(event) {
    event.preventDefault();
    const food= $("select#food").val();
    const music= $("select#music").val();
    const animal= $("select#animal").val();
    const color= $("select#color").val();
    const fun= $("select#fun").val();

    if (food === 'american' && music === 'rock') {
      $('#html').show();
    } else if (food === 'asian' && music === 'rock') {
      $('#css').show();

    
  });
});
