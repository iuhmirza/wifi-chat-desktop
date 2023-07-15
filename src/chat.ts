import './chat.css'

document.addEventListener('DOMContentLoaded', function (event) {
  let username: string;
  window.electron.onUsername(function (event: Event, user: string) {
    username = user
    document.getElementById('username').textContent = `Hello ${username}!`;
  })
  document.getElementById('messageForm').addEventListener('submit', function (event) {
    event.preventDefault()
    const message = document.getElementById('message') as HTMLInputElement
    window.electron.sendMsg(username, message.value)
    message.value = ''
  })
  window.electron.receiveMsg(function(event: Event, obj: {username: string, content: string}) {
    const p = document.createElement('p')
    const chat = document.getElementById('chat')
    p.textContent = `${obj.username} ${obj.content}`
    chat.appendChild(p)
    chat.scrollTop = chat.scrollHeight
  })
})