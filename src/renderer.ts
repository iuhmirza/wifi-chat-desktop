/**
 * This file will automatically be loaded by webpack and run in the "renderer" context.
 * To learn more about the differences between the "main" and the "renderer" context in
 * Electron, visit:
 *
 * https://electronjs.org/docs/latest/tutorial/process-model
 *
 * By default, Node.js integration in this file is disabled. When enabling Node.js integration
 * in a renderer process, please be aware of potential security implications. You can read
 * more about security risks here:
 *
 * https://electronjs.org/docs/tutorial/security
 *
 * To enable Node.js integration in this file, open up `main.js` and enable the `nodeIntegration`
 * flag:
 *
 * ```
 *  // Create the browser window.
 *  mainWindow = new BrowserWindow({
 *    width: 800,
 *    height: 600,
 *    webPreferences: {
 *      nodeIntegration: true
 *    }
 *  });
 * ```
 */

import { Service } from 'bonjour-service';
import './index.css';

document.addEventListener('DOMContentLoaded', function(event) {
  const form = document.getElementById('userForm')
  form.addEventListener('submit', formSubmitHandler)

  window.electron.onServer(function(event: Event, name: string, index: Number) {
    const l = document.createElement('label')
    const s = document.createElement('input')
    s.type = 'radio'
    s.name = 'radio'
    s.value = index.toString()
    s.required = true
    l.appendChild(s)
    l.appendChild(document.createTextNode(name))
    form.appendChild(l)
  })

  function formSubmitHandler(event: SubmitEvent) {
    event.preventDefault()
    const username = (document.getElementById('username') as HTMLInputElement).value
    const server = (document.querySelector('input[name="radio"]:checked') as HTMLInputElement).value
    window.electron.connect(username, server)
    form.removeEventListener('submit', formSubmitHandler)  
  }
})