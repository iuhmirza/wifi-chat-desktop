
document.addEventListener('DOMContentLoaded', function(event) {
    electron.onUsername(function(event: Event, username: string) {
        console.log("here")
        document.getElementById('username').textContent = username;
    })
    document.getElementById('messageForm').addEventListener('submit', function(event) {
        event.preventDefault()
        const message = document.getElementById('message') as HTMLInputElement
        console.log(message.value)
        message.value = ''
    })

})