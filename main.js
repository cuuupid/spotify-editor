const app = require('electron').app

var t = titlebar();
t.appendTo(document.body);
t.on('close', function(e) {
	console.log('close');
});
t.element.appendChild(document.createElement('div'));
t.destroy();

app.on('ready', () => {
    win = new electron.BrowserWindow({
        width: 300, height: 500, icon: __dirname + '/icon.ico',
        webPreferences: {
            plugins: true,
            nodeIntegration: false
        },
        frame: false
    })
    win.on('closed', () => { app.quit() })
    win.loadFile('index.html')
})