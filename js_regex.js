$(function() {
  var processRegex = function() {
    var regex = $('#input_regex').val();
    if (!regex) return;
    var str = $('#input_input').val();
    if (!str) return;
    var modifier = $('#input_modifier').val();
    regex = regex.replace(/^\//, '').replace(/\/$/, '');
    try {
      var regexp = new RegExp(regex, modifier);
      var m = str.match(regexp);
      var ms = [];
      $('#results').html('');
      if (m) {
        var ul = $('<ul>');
        var ii = 0;
        var n = m.length;
      for (; ii < n; ++ii) {
        ul.append($('<li>').html('['+ii+'] => [' + m[ii] + ']'));
      };
        $('#results').removeClass('error').append(ul);
      }
      else {
        $('#results').removeClass('error').html('no match');
      }
    }
    catch(e) {
      console.log(e);
      $('#results').addClass('error').html(e.toString());
    }
  };
  $("input[name=regex], input[name=modifier], textarea[name=input]")
    .bind('keyup',function() {
      processRegex();
      return true;
    })
    .bind('focus',function() {
      processRegex();
      return true;
    }).bind('blur',function() {
      processRegex();
      return true;
    });
  
  processRegex();

});