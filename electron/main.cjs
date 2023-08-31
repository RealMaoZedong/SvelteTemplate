
const { log } = require('console')
const { app, BrowserWindow } = require('electron')
const path = require('path')

if (require('electron-squirrel-startup')) app.quit();

const isDevEnvironment = process.env.DEV_ENV === 'true'

if (isDevEnvironment) {
    require('electron-reload')(__dirname, {
        electron: path.join(__dirname, '..', 'node_modules', '.bin', 'electron'),
        hardResetMethod: 'exit'
    });
}

let mainWindow;

const createWindow = () => {
    

    mainWindow = new BrowserWindow({
        width: 1300,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })


    if (isDevEnvironment) {

    
        mainWindow.loadURL('http://localhost:8080/');

    
        mainWindow.webContents.on("did-frame-finish-load", () => {
            mainWindow.webContents.openDevTools();
        });

        log('Electron running in dev mode: 🧪')

    } else {
        
    
        mainWindow.loadFile(path.join(__dirname, 'build', 'index.html'));

        log('Electron running in prod mode: 🚀')
    }
}

app.on('ready', createWindow);

app.on('activate', () => {


    if (BrowserWindow.getAllWindows().length === 0) createWindow()
})

