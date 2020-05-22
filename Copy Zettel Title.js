// source: http://1writerapp.com/actiondir/action/06cc4

const fileName = editor.getFileName()
  // remove extension
  .replace(/\.[^/.]+$/, "");
const link = "[[" + fileName + "]]";
app.setClipboard(link);
ui.hudSuccess();

//ui.alert(link);
