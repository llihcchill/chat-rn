const express = require("express")
const path = require("path")
const app = express()
const server = require("http").createServer(app)

const { Server } = require("socket.io")
const io = new Server(server)

// global variables
var chat = []
// global variables end

app.use(express.static("public"))

// directories ------------------------
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/chat.html"))
})
// directories end --------------------

io.on("connection", (socket) => {
    console.log("user has connected")

    socket.on("disconnect", () => {
        console.log("user has disconnected")
    })

    socket.on("chat-message", (msg) => {
        console.log(msg)

        // re-emit it
        chat.push(msg)
        io.emit("messages", chat)
    })

    socket.on("update", () => {
        console.log("socket got update")
        io.emit("updated-messages", chat)
    })
})


server.listen(3000, () => {
    console.log("server is running")
})