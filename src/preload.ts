// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld('electron', {
    connect: function (username: string, index: number) {
        ipcRenderer.send('connect', username, index)
    },
    onServer: function(fn: any) {
        ipcRenderer.on('server', fn)
    }
})