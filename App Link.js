// source: http://1writerapp.com/actiondir/action/7824e
// modified to exclude affiliate links

var initial;
var entities = ["iPhone|software", "iPad|iPadSoftware", "Mac|macSoftware"];

if (editor.getSelectedText()) {
    initial = editor.getSelectedText();
} else {
    initial = '';
}

ui.list('App Type', entities, false, setEntity);

function setEntity(selectedValues) {
    if (!selectedValues) { //user pressed Cancel
        return;
    }
    var apptype = selectedValues.join('\n');
    ui.input('App Name', initial, 'Enter app name', searchApp);
    function searchApp(appName) {
    if (!appName) { //user pressed Cancel button
        return;
    }
    ui.hudProgress('Searching');
    http.get('https://itunes.apple.com/search', { term: appName, media: 'software', country: 'us', entity: apptype }, handleResponseData);
}

function handleResponseData(response, error) {
    if (error) {
        ui.hudError();
        return;
    }
    ui.hudDismiss();
    var listData = response.results.map(function(item) {
        //this value will be inserted into the document
        var value = '[' + editor.getSelectedText() + ']' + '(' + item.trackViewUrl + ')';
        return item.trackName + '|' + value + '|' + item.formattedPrice;
    });
    ui.list('Search Result', listData, true, insertAppInfo);
}

function insertAppInfo(selectedValues) {
    if (!selectedValues) { //user pressed Cancel
        return;
    }
    var text = selectedValues.join('\n');
    if (editor.isClosed()) { //create new file if needed
        editor.newFile(text);
    }
    else {
        editor.replaceSelection(text);
    }
}
}
