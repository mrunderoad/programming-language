$(document).ready(function() { 
  $("form#form").submit(function(event) {
    event.preventDefault();
    const name= $("input#name").val();
    const food= $("select#food").val();
    const music= $("select#music").val();
    const animal= $("select#animal").val();
    const color= $("select#color").val();
    const fun= $("select#fun").val();

    if (food === 'american' && music === 'rock') {
      $('#html').show();
      $('#css').hide();
      $('#js').hide();
    } else if (food === 'american' && music === 'indie') {
      $('#html').hide();
      $('#css').show();
      $('#js').hide();
    } else if (food === 'asian' && music === 'rock') {
      $('#html').hide();
      $('#css').hide();
      $('#js').show();
    } else if (food === 'asian' && music === 'indie') {
      $('#html').hide();
      $('#css').show();
      $('#js').hide();
    } else if (food === 'american' && animal === 'cat') {
      $('#html').hide();
      $('#css').hide();
      $('#js').show();
    }
    
  });
});
