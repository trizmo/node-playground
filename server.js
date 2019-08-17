console.log("Startin Node.JS Server...")

const express = require("express")

const port = process.env.PORT || 5000
const app = express()

app.use("/api", require("./routing/api/index"))


app.get("/", (req, res) => {
    res.json({
        "message": "hello world!"
    })
})

app.listen(port, () => {
    console.log("Server started on port: ", port)
})