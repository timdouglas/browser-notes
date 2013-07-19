/*jshint browser:true eqnull:true strict:true loopfunc:true*/
/**
  * JS embedded in the iframe's data uri - easier to edit here...
  * Colour changing based on bgrins submission to 
  * http://www.fizerkhan.com/blog/posts/Use-your-browser-as-Notepad.html
  */
window.onload = function()
{
  "use strict";

  var e=false,
    t=0;

  setInterval(function()
  {
    //work out initial colour
    if(!e)
    {
      t = Math.round(Math.max(0, t - Math.max(t / 3, 1)));
    }
    
    //calculate colour
    var n = (255 - t * 2).toString(16),
      c = '#'+n+'ff'+''+n;
    
    if(parseInt(n, 16) < 171)
    {
      c = '#'+n+''+n+'ff';
    }
    else if(parseInt(n,16) < 213)
    {
      c = '#ff'+n+''+''+n;
    }

    document.body.style.backgroundColor=c;
    
  },1e3);

  var n=null,
    m=null;

  document.onkeydown = function()
  {
    t = Math.min(128, t + 2);
    e = true;

    clearTimeout(n);
    n = setTimeout(function(){ e = false; },1500);

    //send content to parent to save
    clearTimeout(m);
    m = setTimeout(function(){ parent.postMessage(document.body.innerHTML, '*'); }, 3000);
  };
};
