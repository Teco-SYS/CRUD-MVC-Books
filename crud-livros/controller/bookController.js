const books = require("../model/bookModel")

// Listar todos
const getBooks = (req, res) => {
  res.json(books)
}

// Buscar por ID
const getBookById = (req, res) => {
  const id = Number(req.params.id)

  const book = books.find(book => book.id === id) 

  if (!book) {
    return res.status(404).json({
      message: "Livro não encontrado"
    })
  }

  res.json(book)
}

// Criar
const createBook = (req, res) => {
    console.log(req.body)

    const { title, author } = req.body

    const newBook = {
        id: books.length + 1,
        title,
        author
    }

    books.push(newBook)

    res.status(201).json(newBook)
}

// Atualizar
const updateBook = (req, res) => {
  const id = Number(req.params.id)

  const book = books.find(book => book.id === id)

  if (!book) {
    return res.status(404).json({
      message: "Livro não encontrado"
    })
  }

  const { title, author } = req.body

  book.title = title
  book.author = author

  res.json(book)
}

// Excluir
const deleteBook = (req, res) => {
  const id = Number(req.params.id)

  const index = books.findIndex(book => book.id === id)

  if (index === -1) {
    return res.status(404).json({
      message: "Livro não encontrado"
    })
  }

  books.splice(index, 1)

  res.json({
    message: "Livro removido com sucesso"
  })
}

module.exports = {
  getBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook
}