// source: http://1writerapp.com/actiondir/action/0e854
// ref: http://1writerapp.com/actiondir/action/e2db4

var allText = editor.getText();
var range = editor.getSelectedRange();

ui.input('Footnote Name', '', 'Enter Footnote Name', enterFootnote);

function cursorToEnd() {
  var content = editor.getText();
  editor.setSelectedRange(content.length);
}

function enterFootnote(footnoteLabel) {
    if (!footnoteLabel) { //user pressed Cancel button
        return;
    }
    if (allText.indexOf('^' + footnoteLabel) !=-1) {
        ui.hudError('Choose A Different Name');
        return;
    }
    ui.input('Footnote Text', '', 'Enter Footnote Text', enterFootnoteText);
    function enterFootnoteText(footnoteText) {
    if (!footnoteText) { //user pressed Cancel button
        return;
    }

    editor.replaceTextInRange(range[0], range[1], ('[^'+ footnoteLabel + ']'));

    var footnote = '[^' + footnoteLabel + ']: ' + footnoteText + '\n\n';
    cursorToEnd();
    editor.replaceSelection(footnote);
    }
}
