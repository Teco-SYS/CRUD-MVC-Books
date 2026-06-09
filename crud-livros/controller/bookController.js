const books = require("../model/bookModel")

// listar todos
const getbooks = (request, response) => {
    response.json(books)
}

// buscar por id
const getBookById = (request, response) => {
    const id = NUMBER(request.params.id)

    const book = books.find(book => book.id === id)

    if (!book) {
        return response.status(404).json({
            message: "livro não encontrado"
        });
    }
response.json(book)

// criar
const createBook = (req, res) => {
    const { title, author } = req.body

    const newBook = {
        id: books.length + 1,
        title,
        author
    };

    books.push(newBook)
    res.status(201).json(newBook)

    // atualizar 
    const updateBook = (req, res) => {
        const id = Number(req.param.id)

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

    // excluir 
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
}
}

module.exports = {
    getbooks,
    getBookById,
    createBook,
    updateBook,
    deleteBook
}
