import { useState, useEffect } from 'react';
import './BookFormComponent.css'

function BookFormComponent(props) {

    const [book, setBook] = useState(props.book);
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        setBook(props.book);
        setIsEditing(!!props.book.ISBN10);
    }, [props.book]);

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

    const inputClean = () => {
        setBook({
            nome: '',
            autor: '',
            ano: '',
            categoria: '',
            ISBN10: '',
            linkCompra: ''
        });
        setIsEditing(false);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!/^\d{4}$/.test(book.ano)) {
            alert("O ano deve conter exatamente 4 dígitos numéricos. ex: 2025")
        } else if (isDuplicate(book, props.booklist) && isEditing) {
            const filteredBooklist = [...props.booklist].filter(item => item.ISBN10 !== book.ISBN10)
            const newBooklist = [...filteredBooklist, book]
            props.setBookList(newBooklist)
            inputClean()
        } else if (isDuplicate(book, props.booklist) && !isEditing) {
            alert("Já existe um livro com o mesmo ISBN-10. Se quiser altera-lo faça através do botão \"editar\".")
        } else {
            const newBookList = [...props.booklist, book]
            props.setBookList(newBookList);
            inputClean()
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
                        placeholder="Digite o nome do livro"
                    />
                </div>
                <div>
                    <label>Autor(a):</label>
                    <input
                        required
                        type="text"
                        name="autor"
                        value={book.autor}
                        onChange={handleChange}
                        placeholder="Digite o nome do autor(a)"
                    />
                </div>
                <div>
                    <label>Ano:</label>
                    <input
                        required
                        name="ano"
                        value={book.ano}
                        onChange={handleChange}
                        type='number'
                        placeholder="Digite o ano 4 dígitos"
                        maxLength={4}
                    />
                </div>
                <div>
                    <label>Categoria:</label>
                    <input
                        required
                        type="text"
                        name="categoria"
                        value={book.categoria}
                        onChange={handleChange}
                        placeholder="Digite a categoria do livro"
                    />
                </div>
                <div>
                    <label>ISBN-10:</label>
                    <input
                        required
                        type="text"
                        name="ISBN10"
                        value={book.ISBN10}
                        onChange={handleChange}
                        placeholder="Digite o ISBN-10 do livro"
                        maxLength={10}
                        disabled={isEditing}
                    />
                </div>
                <div>
                    <label>Link de Compra: (opcional)</label>
                    <input
                        type="text"
                        name="linkCompra"
                        value={book.linkCompra}
                        onChange={handleChange}
                        placeholder="Digite o link de compra do livro"
                    />
                </div>
                <br />
                <button type="submit">Cadastrar Livro</button>
                <button
                    onClick={inputClean}
                    style={{ color: "red" }}
                >
                    Limpar Formulário
                </button>
            </form>
        </div>
    )
}

export default BookFormComponent