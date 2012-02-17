(function(){
  if (!document.getElementById('css-of-doom')){
    var objHead = document.getElementsByTagName('head'); 
    var objCSS = objHead[0].appendChild(document.createElement('link')); 
    objCSS.id = 'css-of-doom'; 
    objCSS.rel = 'stylesheet'; 
    objCSS.href = 'https://raw.github.com/midday/CSS-of-doom/master/doom.css'; 
    objCSS.type = 'text/css';    
  }
 })()