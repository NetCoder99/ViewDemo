const { app, BaseWindow, BrowserWindow, WebContentsView } = require('electron/main')

const appRoot = require('app-root-path');
const {createCheckinWindow}    = require(appRoot + '/src/pages/checkin/checkin_window.js') ;

app.whenReady().then(() => {
  const win = new BaseWindow({ width: 1200, height: 800 });

  const view1 = new WebContentsView()
  view1.setBounds({ x: 0, y: 0, width: 500, height: 400 })
  view1.webContents.loadURL('https://electronjs.org')
  win.contentView.addChildView(view1)

  const checkinView = createCheckinWindow(true);
  checkinView.setBounds({ x: 501, y: 0, width: 500, height: 400 })
  checkinView.setVisible(true);
  win.contentView.addChildView(checkinView);

})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
