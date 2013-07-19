/*jshint browser:true eqnull:true strict:true loopfunc:true*/
window.onload = function()
{
  "use strict";

  //add previously saved note into iframe
  var data = window.localStorage.getItem("savednote"),
    iframe = document.getElementsByTagName("iframe")[0],
    data_uri = iframe.src;

  if(data != null) 
  {
    data_uri = iframe.src + data;
  }
  else
  {
    data_uri = iframe.src + "<h1>Notes</h1><br>";
  }

  iframe.src = data_uri;
};

//save note
window.addEventListener("message", function(event)
{
  "use strict";
  window.localStorage.setItem("savednote", event.data);
}, false);
