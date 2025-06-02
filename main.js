const { app, BaseWindow, BrowserWindow, WebContentsView } = require('electron/main')

// const createWindow = () => {
//   const win = new BrowserWindow({
//     width: 800,
//     height: 600
//   });
//   win.loadFile('index.html');
//   return win;
// }

// const createPage1 = () => {
//   console.log(`page1 cwd: ${process.cwd()}`);
//   const page1View = new WebContentsView({  });  
//   page1View.setBounds({ x: 10, y: 110, width: 400, height: 400 });
//   const page1ViewPath = './pages/Page1/page1.html';
//   page1View.webContents.loadURL(page1ViewPath);  
//   return page1View;
// }

app.whenReady().then(() => {
  const win = new BaseWindow({ width: 800, height: 400 });

  const view1 = new WebContentsView()
  win.contentView.addChildView(view1)
  view1.setBounds({ x: 0, y: 0, width: 400, height: 400 })
  view1.webContents.loadURL('https://electronjs.org')

})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
