// source: http://1writerapp.com/actiondir/action/fe1d5

var str = editor.getText();
var word = editor.getSelectedText();
pattern = '(\\[\\^' + word + '\\]:)\\s(.+)';
var re = new RegExp(pattern);

var match = re.exec(str);

ui.alert(match[2], 'Footnote');
