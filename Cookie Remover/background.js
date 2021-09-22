"use strict";
var API = chrome || browser;

// 点击监听
API.browserAction.onClicked.addListener(function(tab) {
    API.tabs.executeScript(tab.id, { file: "main.js" })
});

// 这段没啥用 估计是谷歌分析跟踪统计工具的代码
// var _gaq = _gaq || [];
// _gaq.push(['_setAccount', 'UA-69824169-4']);
// _gaq.push(['_trackPageview']);


// 在head中插入一段 <script type="text/javascript" async="" src="https://ssl.google-analytics.com/ga.js"></script>
// (function() {
//     var ga = document.createElement('script');
//     ga.type = 'text/javascript';
//     ga.async = true;
//     ga.src = 'https://ssl.google-analytics.com/ga.js';
//     var s = document.getElementsByTagName('script')[0];
//     s.parentNode.insertBefore(ga, s);
// })();