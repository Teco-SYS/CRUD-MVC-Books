const express = require("express")

const router = express.Router()

const {
    getbooks,
    getBookById,
    createBook,
    UptdateBook,
    deleteBook
} = require("../controller/bookController")

router.get("/", bookController.getbooks)

router.get("/:id", book.controller.getBookById)

router.post("/", book.controller.createBook)

router.put("/:id", book.controller.UptdateBook)

router.delete("/:id", book.controller.deleteBook)

module.exports = router