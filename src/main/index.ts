import { app, shell, BrowserWindow, ipcMain,screen } from 'electron'
import { join } from 'path'
import { electronApp, optimizer, is } from '@electron-toolkit/utils'
import icon from '../../resources/icon.png?asset'


let WIDTH:number;
let HEIGHT:number;

let mainWindow: BrowserWindow;
let max = false;
function createWindow(): void {

  WIDTH = Math.floor(screen.getPrimaryDisplay().workAreaSize.width * 0.85)
  HEIGHT = Math.floor(screen.getPrimaryDisplay().workAreaSize.height * 0.9)


  // Create the browser window.
  mainWindow = new BrowserWindow({
    width:  WIDTH,
    height: HEIGHT,
    show: false,
    autoHideMenuBar: true,
    center: true,
    roundedCorners: true,
    frame: false,
    transparent: true,
    maximizable: true,
    ...(process.platform === 'linux' ? { icon } : {}),
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false
    }
  })

  mainWindow.on('ready-to-show', () => {

    // add event
    ipcMain.on("press-max-min", () => {
      if (max) {
        max = false;

        mainWindow.setSize(WIDTH, HEIGHT)
        mainWindow.center()
      } else {
        max = true;
        mainWindow.maximize()
      }

    });


    ipcMain.on("press-minimize", () => {
      mainWindow.minimize()
    })

    mainWindow.show()

  })

  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })

  // HMR for renderer base on electron-vite cli.
  // Load the remote URL for development or the local html file for production.
  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    mainWindow.loadURL(process.env['ELECTRON_RENDERER_URL'])
  } else {
    mainWindow.loadFile(join(__dirname, '../renderer/index.html'))
  }



}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  // Set app user model id for windows
  electronApp.setAppUserModelId('com.electron')

  // Default open or close DevTools by F12 in development
  // and ignore CommandOrControl + R in production.
  // see https://github.com/alex8088/electron-toolkit/tree/master/packages/utils
  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window)
  })

  // IPC test
  ipcMain.on('ping', () => console.log('pong'))

  createWindow()

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })




  ipcMain.on("close-app", () => {
    app.quit()
  })




})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

// In this file you can include the rest of your app"s specific main process
// code. You can also put them in separate files and require them here.
