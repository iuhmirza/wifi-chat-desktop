import './chat.css'

const colors = new Map();

document.addEventListener('DOMContentLoaded', function (event) {
  let username: string;
  window.electron.onUsername(function (event: Event, user: string) {
    username = user
    const s = document.createElement('span')
    s.className = 'username-username'
    s.textContent = username
    document.getElementById('username').appendChild(document.createTextNode('Hello, '))
    document.getElementById('username').appendChild(s)
    document.getElementById('username').appendChild(document.createTextNode('!'))
  })

  document.getElementById('messageForm').addEventListener('submit', function (event) {
    event.preventDefault()
    const message = document.getElementById('message') as HTMLInputElement
    window.electron.sendMsg(username, message.value)
    message.value = ''
  })

  window.electron.receiveMsg(function(event: Event, obj: {username: string, content: string}) {
    const li = document.createElement('li')
    const chat = document.getElementById('chat')
    const u = document.createElement('span')
    u.className = 'username-username'
    if (!colors.has(obj.username)) {
      colors.set(obj.username, `rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`)
    }
    u.style.color = colors.get(obj.username)
    u.textContent = obj.username
    li.appendChild(u)
    li.appendChild(document.createTextNode(` ${obj.content}`))
    chat.appendChild(li)
    chat.scrollTop = chat.scrollHeight
  })
})