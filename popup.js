document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("copy").addEventListener("click", getDevice);
});

var ticketTitle = "";

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
    alert("選べや！");
  }
  // 選択済みの職種を確保
  console.log(jobName[0]);
}

// サービス名を取得
function getServiceName() {
  var serviceName = document.getElementById("service").value;
  // 未選択の場合は、エラー対応
  if (serviceName != "null") {
    console.log(serviceName);
  } else {
    alert("選べや！");
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
    alert("選べや！");
  }
  // 選択済みの職種を確保
  console.log(channelName);
}
// 流入経路
function getOpt() {
  var optName = "";
  for (var i = 0; i < document.optNames.optimization.length; i++) {
    // i番目のチェックボックスがチェックされているかを判定
    if (document.optNames.optimization[i].checked) {
      optName = document.optNames.optimization[i].value;
    }
  }
  // 職種未選択の場合アラート表示
  if (optName.length == 0) {
    alert("選べや！");
  }
  // 選択済みの職種を確保
  console.log(optName);
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
    alert("選べや！");
  }
  // 選択済みの職種を確保
  console.log(deviceName);
}
