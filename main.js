const app = require('electron').app
require('titlebar')

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