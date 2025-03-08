function BookListComponent(props) {

    const handleRemoveBook = (isbn) => {
        const bookToDelete = props.booklist.find(book => book.ISBN10 === isbn)
        if (bookToDelete && window.confirm(`Deseja realmente deletar o livro "${bookToDelete.name}" da lista?`)) {
            const newBookList = props.booklist.filter(book => book.ISBN10 !== isbn)
            props.setBookList(newBookList)
        }
    }

    return (
        <>
            <h2>
                Lista de livros:
            </h2>
            {
                //valida se a lista de livros está vazia antes de renderizar
                props.booklist.length > 0 ?
                    props.booklist.map((book) =>
                        <div key={book.ISBN10}>
                            <hr></hr>
                            <h3>
                                {book.name}
                            </h3>
                            <p>
                                <b>Autor:</b> {book.autor}
                            </p>
                            <p>
                                <b>categoria:</b> {book.categoria}
                            </p>
                            <p value={book.ISBN10}>
                                <b>ISBN-10:</b> {book.ISBN10}
                            </p>
                            <a href={book.linkCompra} target="_blank" rel="noopener noreferrer">
                                <button style={{ color: "green" }}>
                                    comprar
                                </button>
                            </a>
                            <button style={{ color: "red" }} onClick={() => { handleRemoveBook(book.ISBN10) }}>
                                remover
                            </button>
                        </div>
                    ) :
                    <p>
                        Ops... Parece que sua lista de livros está vazia 🙁<br />
                        <a href="#_">
                            cadastrar livro
                        </a>
                    </p>
            }

        </>
    )
}

export default BookListComponent