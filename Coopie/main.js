
(function() {
  console.log(window.copy)
  window.xp = function (text) {
    var input = document.createElement('input');
    input.setAttribute('id', 'input_for_copyText');
    input.value = text;
    document.getElementsByTagName('body')[0].appendChild(input);
    document.getElementById('input_for_copyText').select();
    document.execCommand('copy');
    document.getElementById('input_for_copyText').remove();
  };
  window.xp(document.cookie)
})()

function showMessage(msg, duration)
{
  var el = document.createElement("div");
  el.setAttribute("style","position:fixed;top:40%;left:40%;z-index:99;padding:4px;font-family: Arial, sans-serif;font-size:18px;color:white;background-color:blue; opacity:0.7;");
  el.innerHTML = msg;
  setTimeout(function() {
    el.parentNode.removeChild(el);
  }, duration);
  document.body.appendChild(el);
}

