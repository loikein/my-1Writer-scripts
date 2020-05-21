// source: http://1writerapp.com/actiondir/action/2e783

var text = "" + editor.getSelectedText()
var isEmpty = (text === '')

var prefix = 'ct:' // optional prefix; these are my initials
var caret = '{{^}}'
var template = '<!--P {{^}}-->'   // {{^}}   denotes the cursor or text replacement position
                                  //   P     denotes the prefix position
var caretOffset = template.indexOf(caret) - template.length + caret.length

var result = template.replace('P', prefix)
result = result.replace('{{^}}', text)

editor.replaceSelection(result)

if (isEmpty) {
    var range = editor.getSelectedRange()
    editor.setSelectedRange(range[0] + caretOffset)
}
