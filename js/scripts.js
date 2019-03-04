var score = 0;

var score2 = 0;

$(document).ready(function() {
  $("button#start").click(function() {
    $("div.game").toggle();
    $("div#hidden1").hide();
  });
  $("#rolling").click(function() {
    var result = Math.floor(Math.random() * 6 + 1);
    score += result;
    document.getElementById('roll-1').innerHTML = result;
    document.getElementById('total-roll-1').innerHTML = score;

    if (result == 1) {
      score = 0;
      document.getElementById('score1').innerHTML = score;
    }
  });
  $('#Pass').click(function() {
    document.getElementById('total-1').innerHTML = score;
    score = 0;
  });
});



$("#rolling").click(function() {
  var result = Math.floor(Math.random() * 6 + 1);
  score2 += result;
  document.getElementById('roll-2').innerHTML = result;
  document.getElementById('total-roll-2').innerHTML = score2;

  if (result == 1) {
    score2 = 0;
    document.getElementById('score2').innerHTML = score2;
  }
});
$('#Pass').click(function() {
  document.getElementById('total-2').innerHTML = score2; 
  score2 = 0;
});
