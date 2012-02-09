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
    if (m) {
      var ii = 0;
      var n = m.length;
      for (; ii < n; ++ii) {
        ms.push('Match(' + ii + ') = [' + m[ii] + ']');
      };
      $('#results').html(ms.join('<br/>'));
    }
    else {
      $('#results').html('no match');
    }
      
  };
  $("input[name=regex], input[name=input]").bind('keypress',function() {
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

});