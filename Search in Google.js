// adapted from: http://1writerapp.com/actiondir/action/72ae6

s=editor.getSelectedText();
if (s!="") {
url="https://www.google.com/search?q="+encodeURIComponent(s);
webBrowser.open(url);
}
