const express = require("express")

const app = express()

const booRoute = require("./routes/bookRoutes")

app.use(express.json())

app.use("/books, bookRoutes")

app.listen(3000, () => {
    console.log("Servidor Online em http://localhost:3000")
})