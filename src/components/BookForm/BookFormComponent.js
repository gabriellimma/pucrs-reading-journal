import { useState } from 'react';


function BookFormComponent(props) {

    const [book, setBook] = useState({
        nome: '',
        autor: '',
        ano: '',
        categoria: '',
        ISBN10: '',
        linkCompra: ''
    });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setBook({
            ...book,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newBookList = [...props.booklist, book]
        props.setBookList(newBookList);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Nome:</label>
                <input
                    type="text"
                    name="nome"
                    value={book.nome}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Autor:</label>
                <input
                    type="text"
                    name="autor"
                    value={book.autor}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Ano:</label>
                <input
                    type="text"
                    name="ano"
                    value={book.ano}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Categoria:</label>
                <input
                    type="text"
                    name="categoria"
                    value={book.categoria}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>ISBN-10:</label>
                <input
                    type="text"
                    name="ISBN10"
                    value={book.ISBN10}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Link de Compra:</label>
                <input
                    type="text"
                    name="linkCompra"
                    value={book.linkCompra}
                    onChange={handleChange}
                />
            </div>
            <button type="submit">Cadastrar Livro</button>
        </form>
    )
}

export default BookFormComponent