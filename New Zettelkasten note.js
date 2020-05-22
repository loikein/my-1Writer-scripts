// references:
// http://1writerapp.com/actiondir/action/24192
// http://1writerapp.com/actiondir/action/f8b4f

var now = new Date();
var min = now.getMinutes();
min = min < 10 ? '0'+min : min;

var hh = now.getHours();
var dd = now.getDate();
dd = dd < 10 ? '0'+dd : dd;

var mm = now.getMonth()+1;
mm = mm < 10 ? '0'+mm : mm;

var yyyy = now.getYear()+1900;

var today = +yyyy + mm + dd + hh + min;

editor.newFile("", today)
