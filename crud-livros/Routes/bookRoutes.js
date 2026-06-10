const express = require("express")


const router = express.Router()

app.use(express.json())

const {
    getbooks,
    getBookById,
    createBook,
    UptdateBook,
    deleteBook
} = require("../controller/bookController")

router.get("/", bookController.getbooks)

router.get("/:id", bookcontroller.getBookById)

router.post("/", bookcontroller.createBook)

router.put("/:id", bookcontroller.UptdateBook)

router.delete("/:id", bookcontroller.deleteBook)

module.exports = router