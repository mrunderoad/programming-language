$(document).ready(function() { 
  $("form#form").submit(function(event) {
    event.preventDefault();
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
    } else if (food === 'asian' && animal === 'dog') {
      $('#html').show();
      $('#css').hide();
      $('#js').hide();
    } else if (music === 'rock' && animal === 'dog') {
      $('#html').hide();
      $('#css').hide();
      $('#js').show();
    } else if (music === 'rock' && animal === 'cat') {
      $('#html').hide();
      $('#css').show();
      $('#js').hide();
    } else if (music === 'indie' && fun === 'sky') {
      $('#html').show();
      $('#css').hide();
      $('#js').hide();
    } else if (color === 'red' && animal === 'dog') {
      $('#html').hide();
      $('#css').hide();
      $('#js').show();
    }else if (color === 'red' && animal === 'cat') {
      $('#html').hide();
      $('#css').show();
      $('#js').hide();
    } else if (color === 'blue' && animal === 'dog') {
      $('#html').hide();
      $('#css').hide();
      $('#js').show();
    } else if (fun === 'sky' && music === 'rock') {
      $('#html').show();
      $('#css').hide();
      $('#js').hide();
    } else if (fun === 'bungee' && animal === 'dog') {
      $('#html').hide();
      $('#css').show();
      $('#js').hide();  
    } else if (fun === 'sky' && food === 'american') {
      $('#html').show();
      $('#css').hide();
      $('#js').hide();
    } else if (food === 'american' && color === 'red') {
      $('#html').show();
      $('#css').hide();
      $('#js').hide();
    } else if (fun === 'sky' && color === 'red') {
      $('#html').hide();
      $('#css').show();
      $('#js').hide();
    } else 
    alert("Try a different combination!")
  });
});
