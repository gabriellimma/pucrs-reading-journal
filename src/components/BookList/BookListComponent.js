import "./BookListComponent.css"

function BookListComponent(props) {

    const handleRemoveBook = (isbn) => {
        const bookToDelete = props.booklist.find(book => book.ISBN10 === isbn)
        if (bookToDelete && window.confirm(`Deseja realmente deletar o livro "${bookToDelete.nome}" da lista?`)) {
            const newBookList = props.booklist.filter(book => book.ISBN10 !== isbn)
            props.setBookList(newBookList)
        }
    }

    const setBookToEdit = (isbn) => {
        const bookToEdit = props.booklist.find(book => book.ISBN10 === isbn)
        props.editBook(bookToEdit)
        props.focusFunction()
    }

    return (
        <section id="lista_de_livros">
            <hr />
            <h1 className="title">
                Lista de livros:
            </h1>
            {
                //valida se a lista de livros está vazia antes de renderizar
                props.booklist.length > 0 ?
                    props.booklist.map((book) =>
                        <div key={book.ISBN10}>

                            <h3>
                                {book.nome}
                            </h3>
                            <p>
                                <b>Autor:</b> {book.autor}
                            </p>
                            <p>
                                <b>Ano:</b> {book.ano}
                            </p>
                            <p>
                                <b>categoria:</b> {book.categoria}
                            </p>
                            <p value={book.ISBN10}>
                                <b>ISBN-10:</b> {book.ISBN10}
                            </p>
                            {
                                book.linkCompra && book.linkCompra !== '' &&
                                <a href={book.linkCompra} target="_blank" rel="noopener noreferrer">
                                    <button style={{ color: "green", cursor: "pointer" }}>
                                        comprar
                                    </button>
                                </a>
                            }
                            <a href={`https://www.google.com/search?q=${book.autor}`} target="_blank" rel="noopener noreferrer">
                                <button style={{ color: "blue", cursor: "pointer" }}>
                                    Buscar Autor no Google
                                </button>
                            </a>
                            <button style={{ color: "orange", cursor: "pointer" }}
                                onClick={() => {
                                    setBookToEdit(book.ISBN10)
                                }}
                            >
                                editar
                            </button>
                            <button style={{ color: "red", cursor: "pointer" }} onClick={() => { handleRemoveBook(book.ISBN10) }}>
                                remover
                            </button>
                            <hr />
                        </div>

                    ) :
                    <p>
                        Ops... Parece que sua lista de livros está vazia 🙁<br />
                        <button onClick={props.focusFunction}>
                            cadastrar livro
                        </button>
                    </p>
            }

        </section>
    )
}

export default BookListComponent