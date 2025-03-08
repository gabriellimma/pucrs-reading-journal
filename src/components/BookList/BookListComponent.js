function BookListComponent(props) {
    return (
        <>
            <h2>
                Lista de livros:
            </h2>
            <>
                {
                    props.booklist.map((book) =>
                        <>
                            <hr></hr>
                            <h3>
                                {book.name}
                            </h3>
                            <h4>
                                Autor: {book.autor}
                            </h4>
                            <p>
                                categoria: {book.categoria}
                            </p>
                            <p>
                                ISBN-10: {book.ISBN10}
                            </p>
                            <a href={book.linkCompra} target="_blank" rel="noopener noreferrer">
                                <button style={{ color: "green" }}>
                                    comprar
                                </button>
                            </a>
                            <button style={{ color: "red" }}>
                                remover
                            </button>

                        </>
                    )
                }
            </>
        </>
    )
}

export default BookListComponent