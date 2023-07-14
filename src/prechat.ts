import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld('electron', {
  onUsername: function(fn: any) {
    ipcRenderer.on('username', fn)
  }
})