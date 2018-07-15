const { app, BrowserWindow } = require('electron');
require('electron-debug')()
//TODO: remove in production
require('electron-reload')(__dirname, {
    electron: require(`${__dirname}/node_modules/electron`)
});

app.on('ready', () => {
    let win = new BrowserWindow({
        width: 300, height: 500, icon: __dirname + '/icon.ico',
        webPreferences: {
            plugins: true
        },
        frame: false
    })
    win.on('closed', () => { app.quit() })
    win.loadFile('./index.html')
})