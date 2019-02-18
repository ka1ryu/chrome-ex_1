$(document).ready(function () {
  $('#hoge').click(function (e) {
    sendTicketToSpreadSheet()
  });

  function sendTicketToSpreadSheet () {
    chrome.tabs.query({ active: true, lastFocusedWindow: true }, function (tabs) {
      var currentTab = tabs[0];

      var toId = $('#to_id_select').val();
	  
      if (!currentTab.url.match('redmine.tools.usaqh.com/issues/')) {
        setResponseMessage('redmineのページから呼んでください');
        setDisabledProp(false);
        return;
      }

      var requestUrl = "https://script.google.com/macros/s/AKfycbxNqFgZ2jUyg8G6OEVYJBJaxbEgJfQD6-1aaGUw0RZ9YK2ey5c/exec";
      var ticketUrl = currentTab.url;
      
      $.ajax({
        url: requestUrl,
        method: 'POST',
        data:{
          ticket  : ticketUrl
          pass    : 'ohayou'
      }
      }).done(() => {
        // $('#to_id_select').val('');
        // setResponseMessage('承認依頼をチャットワークへ送信しました。');
      }).fail((error) => {
        // setResponseMessage(error.statusText || '何らかのエラーで失敗しました。');
      }).always(() => {
        // setDisabledProp(false);
      });
    });
  }

  function setResponseMessage (message) {
    $("#approval_request_error_message").text(message);
  }

  function setDisabledProp (disabled) {
    $('#new_approval_button').prop('disabled', disabled);
    $('#release_approval_button').prop('disabled', disabled);
  }
});
