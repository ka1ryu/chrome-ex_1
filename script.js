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
■概要(必須)
そのチケットの内容に関して記載してください。

■ 対象(必須)
改修するページURL：[例 https://hikkoshizamurai.jp/price/]
端末：[例 SP]
その他条件：[例 アフィユーザに限るなど]

※チケット上でどのページを改修するのか分かるようにしたいです！

■ ABテスト(必須)
(※ユーザ側の改修の場合、ABテストか否かを明記してください)

■ 仮説（ABテストの場合必須）

■ 詳細仕様
※仕様書の添付
　仕様書が完成していない場合は完成予定日を記載してください。

■スケジュール
仕様書確定日：
リリース予定日：（デッドライン）`;

var newArticle =  `
■概要
新規記事作成をお願いします。
（組込みは外注します）

▼仕様書
仕様書パス

▼外注
　:　納品予定

■対象
ページURL：https://hikkoshizamurai.jp//
端末：PC/SP
画像作成：
　アイキャッチ　枚
　イラスト　枚

■スケジュール
仕様書確定日：
デザイン完了日：
フロント完了日：
開発完了日：
リリース予定日：（デッドライン）`;

var rewrite = `
■概要
記事のリライトをお願いします。
（　過去チケットURLor過去仕様書パス　）と同じくらいのボリュームになる予定です。

▼仕様書
仕様書パス

▼外注
　:　納品予定

■リライトの目的



■対象
ページURL：https://hikkoshizamurai.jp//
端末：PC/SP
画像作成：
　アイキャッチ　枚
　イラスト　枚

■スケジュール
仕様書確定日：
デザイン完了日：
フロント完了日：
開発完了日：
リリース予定日：（デッドライン）`;

var internalRefurbishment = `
■概要



▼仕様書
仕様書パス


■施策の目的と仮説



■対象
ページURL：https://hikkoshizamurai.jp//
端末：PC/SP
画像作成：
　アイキャッチ　枚
　イラスト　枚

■スケジュール
仕様書確定日：
デザイン完了日：
フロント完了日：
開発完了日：
リリース予定日：（デッドライン）`;

var createImage = `
■依頼目的


■概要


▼仕様書
仕様書パス


■対象
画像を仕様するページURL：
端末：PC/SP


■スケジュール
仕様書確定日：
リリース予定日：（デッドライン）`;
