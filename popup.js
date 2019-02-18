document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("create").addEventListener("click", createTitle);
  document.getElementById("insertTemp").addEventListener("click", insertTemplate);
});



function insertTemplate () {
  var selectedTempNum = document.getElementById("templates").value;
  if ( selectedTempNum.indexOf('temp')){
    console.log(selectedTempNum);
    chrome.tabs.query({active:true}, function(tab) {
        chrome.tabs.sendMessage(tab[0].id, {list: selectedTempNum}, function(response){
        });
      });
  } else {
    document.getElementById("says").textContent = "テンプレートを選んでほしいです…";
  }
}




function createTitle() {
  if (getServiceName()) {
    getjobCategory();
    getServiceName();
    getChannel();
    getOpt();
    getDevice();
    if(opt == "" && channel != "SEO") {
      setErrorMessage();
    }

    if (channel == "on") {
        //document.getElementById("targetText").textContent = job + "【" + service + "】" + opt +"｜"+ device;
        chrome.tabs.query({active:true}, function(tab) {
        var titleText = job + "【" + service + "】" + device +"｜"+ opt;
        chrome.tabs.sendMessage(tab[0].id, {list: titleText}, function(response){
        });
      });
    } else {
        //document.getElementById("targetText").textContent = job + "【" + service + "】" + channel + "｜" + opt +"｜"+ device;
        chrome.tabs.query({active:true}, function(tab) {
        var titleText = job + "【" + service + "】" + channel + "｜" + device +"｜"+ opt;
        chrome.tabs.sendMessage(tab[0].id, {list: titleText}, function(response){
        });
      });
    }
  }
}

// 職種の選択状況を取得
function getjobCategory() {
  var jobflag = false;
  var jobName = [];
  for (var i = 0; i < document.jobCategory.work.length; i++) {
    // i番目のチェックボックスがチェックされているかを判定
    if (document.jobCategory.work[i].checked) {
      jobflag = true;
      jobName.push(document.jobCategory.work[i].value);
    }
  }
  // 職種未選択の場合アラート表示
  if (jobName.length == 0) {
    return;
  }
  // 選択済みの職種を確保
  job = jobName.join('・');
}

// サービス名を取得
function getServiceName() {
  var serviceName = document.getElementById("services").value;
  // 未選択の場合は、エラー対応
  if (serviceName == "null") {
    setErrorMessage();
    document.getElementById("targetText").textContent = "";
    return false;
  } else {
    service = document.getElementById("services").value;
    return true;
  }
}

// 場所
function getChannel() {
  var channelName = "";
  for (var i = 0; i < document.channelNames.channel.length; i++) {
    // i番目のチェックボックスがチェックされているかを判定
    if (document.channelNames.channel[i].checked) {
      channelName = document.channelNames.channel[i].value;
    }
  }
  // 職種未選択の場合アラート表示
  if (channelName.length == 0) {
    setErrorMessage();
    return;
  }
  channel = channelName
}
// 流入経路
function getOpt() {
  var optName = "";
  for (var i = 0; i < document.optNames.optimization.length; i++) {
    // i番目のチェックボックスがチェックされているかを判定
    if (document.optNames.optimization[i].checked) {
      optName = document.optNames.optimization[i].value;
    } 
    if(optName == undefined){
      optName = "";
    }
  }
  // 選択済みの職種を確保
  opt = optName;
}
// デバイス
function getDevice() {
  var deviceName = "";
  for (var i = 0; i < document.deviceNames.device.length; i++) {
    // i番目のチェックボックスがチェックされているかを判定
    if (document.deviceNames.device[i].checked) {
      deviceName = document.deviceNames.device[i].value;
    }
  }
  // 職種未選択の場合アラート表示
  if (deviceName.length == 0) {
    return;
  }
  // 選択済みの職種を確保
  device = deviceName;
}


// テキストデータをクリップボードへコピー！！！
function copyTextToClip() {
  var element = document.querySelector('#targetText');
  var selection = window.getSelection();
  var range = document.createRange();
  range.selectNodeContents(element);
  selection.removeAllRanges();
  selection.addRange(range);
  //console.log('選択された文字列: ', selection.toString());
  var succeeded = document.execCommand('copy');
  if (succeeded) {
      document.getElementById("says").textContent = "コピーできたで";
  } else {
      document.getElementById("says").textContent = "ちゃんと全部入力しとる？";
  }
  selection.removeAllRanges();
}

function setErrorMessage () {
  document.getElementById("says").textContent = "ちゃんと全部入力しとる？";
}

/*
function getTicketTitle(){
  chrome.tabs.query({active:true}, function(tab) {
    var titleText = document.getElementById('targetText').innerHTML;

         chrome.tabs.sendMessage(tab[0].id, {list: titleText}, function(response){
           console.log(response.result);
         });
     });
}
*/