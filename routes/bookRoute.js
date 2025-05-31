const { fetchbooks, addBook, deletebook, editbook } = require("../controllers/book.controller")

const router = require("express").Router()

router.route("/books").get(fetchbooks).post(addBook)
router.route("/books/:id").delete(deletebook).patch(editbook)


module.exports = router