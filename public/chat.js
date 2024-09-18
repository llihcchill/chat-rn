import {html, render} from "https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js"

var socket = io()
let csMessages = []

socket.on("messages", (msgArray) => {
    console.log(msgArray)
    csMessages.push(msgArray)

    console.log(csMessages)
    renderMessages(msgArray)
})

socket.on("updated-messages", (msges) => {
    console.log(msges)
    renderMessages(msges)
})

function form(e) {
    e.preventDefault()


    const form = e.target
    const formData = new FormData(form)
    const formValues = Object.fromEntries(formData.entries())

    let mess = formValues.message

    console.log(mess)

    document.getElementById("message").value = ""
    socket.emit("chat-message", mess)
}

function chat() {
    const template = () => html`
    <form @submit=${form}>
        <article data-theme="light">
            <input id="message" name="message" type="text" placeholder="Enter message here..." style="width: 85%; margin-left: 6%;" data-theme="dark">
            <div class="grid">
                <div></div>
                <button type="submit" class="outline">Submit Message</button>
                <div></div>
            </div>
        </article>
    </form>
    `
    const container = document.getElementById("chat")
    render(template(), container)
}

function renderMessages(msgArray) {
    const template = () => html`
    <div style="overflow: auto; height: 27rem;">
        ${msgArray.map((i) => html`<p>${i}</p>`)}
    </div>
    `
    const container = document.getElementById("messages")
    render(template(), container)
}

console.log("socket emit update")
socket.emit("update")
chat()