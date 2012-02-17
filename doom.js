(function(){
  var head = document.getElementsByTagName('head')[0];
  var style = document.createElement('style'),
  var rules = document.createTextNode('*::selection { background: transparent!important;   } *::-moz-selection { background: transparent!important; } * { cursor: wait!important; ');
  style.type = 'text/css';
  if(style.styleSheet)
    style.styleSheet.cssText = rules.nodeValue;
  else style.appendChild(rules);
    head.appendChild(style);
})()