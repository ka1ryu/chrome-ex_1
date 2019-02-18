chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
		var word = request.list;
			switch (word) {
				case "common_temp" :
					document.getElementById("issue_description").value = common;
					break;

				case "newArticle_temp" :
					document.getElementById("issue_description").value = newArticle;
					break;

				case "rewrite_temp" :
					document.getElementById("issue_description").value = rewrite;
					break;

				case "internalRefurbishment_temp" :
					document.getElementById("issue_description").value = internalRefurbishment;
					break;

				case "createImage_temp" :
					document.getElementById("issue_description").value = createImage;
					break;
		
				default:
					document.getElementById("issue_subject").value = request.list;
					break;
			}

  var send_mes = request.list;
  sendResponse({result: send_mes});
});

var common = `
ここにテンプレートが入るよ
`;

var newArticle =  `
ここにテンプレートが入るよ
`;

var rewrite = `
ここにテンプレートが入るよ
`;

var internalRefurbishment = `
ここにテンプレートが入るよ
`;

var createImage = `
ここにテンプレートが入るよ
`;
