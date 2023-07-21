import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld('electron', {
  onUsername: function(fn: any) {
    ipcRenderer.on('username', fn)
  },
  receiveMsg: function(fn: any) {
    ipcRenderer.on('receiveMsg', fn)
  },
  sendMsg: function(username: string, content: string) {
    ipcRenderer.send('sendMsg', username, content)
  },
})