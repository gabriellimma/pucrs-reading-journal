import { useState } from 'react';
import './BookFormComponent.css'

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

    const isDuplicate = (book, booklist) => {
        return booklist.find(item => item.ISBN10 === book.ISBN10) ? true : false
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!isDuplicate(book, props.booklist)) {
            const newBookList = [...props.booklist, book]
            props.setBookList(newBookList);
        } else {
            alert(`O livro com o mesmo ISBN10 já está cadastrado.`)
        }
    };

    return (
        <div id='cadastrar_livro'>
            <h2 >
                Cadastro de livro
            </h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nome:</label>
                    <input
                        required
                        type="text"
                        name="nome"
                        value={book.nome}
                        onChange={handleChange}
                        ref={props.inputNameRef}
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
                <br />
                <button type="submit">Cadastrar Livro</button>
            </form>
        </div>
    )
}

export default BookFormComponent