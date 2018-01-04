const {app, BrowserWindow, nativeImage} = require('electron')
const path = require('path')
const url = require('url')

let win

function createWindow() {
	win = new BrowserWindow({width: 1280, height: 960, minWidth: 1280, minHeight: 960})
	win.loadURL(url.format({
		pathname: path.join(__dirname, 'index.html'),
		protocol: 'file:',
		slashes: true
	}))

	win.on('close', () => {
		win = null
	})
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
	if (process.platform !== 'dawin') {
		app.quit()
	}
})

app.on('activate', () => {
	if (win === null) {
		createWindow()
	}
})
