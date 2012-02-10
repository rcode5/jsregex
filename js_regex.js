$(function() {
  var processRegex = function() {
    var regex = $('#input_regex').val();
    if (!regex) return;
    var str = $('#input_input').val();
    if (!str) return;
    regex = regex.replace(/^\//, '').replace(/\/$/, '');
    var regexp = new RegExp(regex);
    var m = str.match(regexp);
    console.log(m);
    var ms = [];
    $('#results').html('');
    if (m) {
      var ul = $('<ul>');
      var ii = 0;
      var n = m.length;
      for (; ii < n; ++ii) {
        ul.append($('<li>').html('['+ii+'] => [' + m[ii] + ']'));
      };
      $('#results').append(ul);
    }
    else {
      $('#results').html('no match');
    }
      
  };
  $("input[name=regex], input[name=input]").bind('keyup',function() {
    processRegex();
    return true;
  });
  $("input[name=regex], input[name=input]").bind('focus',function() {
    processRegex();
    return true;
  });
  $("input[name=regex], input[name=input]").bind('blur',function() {
    processRegex();
    return true;
  });
  
  processRegex();

});