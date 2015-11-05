// ==UserScript==
// @name          ggbb to gbgb
// @namespace     http://isino-ik.github.io/
// @description   ががばばをがばがばへ変換する
// @include       http://search.yahoo.co.jp/search*p=ががばば*
// @include       http://search.yahoo.co.jp/search*p=%E3%81%8C%E3%81%8C%E3%81%B0%E3%81%B0*
// @version       0.1
// @grant         none
// ==/UserScript==

(function() {

  var go = function() {
    location.href = "http://video.fc2.com/a/movie_search.php?keyword=%E3%81%8C%E3%81%B0%E3%81%8C%E3%81%B0";
  };

  $("#popUp > span").html("性的な音声や<br>日常ではあり得ない世界が見えるなど、<br>予期せぬことが報告されています。<br><br>本当に続けますか？");

  $("#popUp > #playSound").on("click", go);
  $("#popUp > #muteSound").on("click", go);
  $("#popUp > #cancel").on("click", go);

}());
