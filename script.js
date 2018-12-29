chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {

  document.getElementById("user_name").value = request.list;
  var send_mes = request.list;
  sendResponse({result: send_mes});
});
