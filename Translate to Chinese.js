// source: http://1writerapp.com/actiondir/action/72ae6
// modified with: http://1writerapp.com/actiondir/action/6bba6

var all = editor.getText();

if (all!="") {
url="http://translate.google.com/?sl=auto&tl=zh-CN&q="+encodeURIComponent(all);
webBrowser.open(url); }
