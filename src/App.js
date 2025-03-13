import { useRef, useState } from 'react';
import './App.css';
import BookFormComponent from './components/BookForm/BookFormComponent';
import BookListComponent from './components/BookList/BookListComponent';
import TitleComponent from './components/TitleComponent/TitleComponent';
import NavbarComponent from './components/NavBar/NavbarComponent';
import rawBooklist from './data/booklist.json'

function App() {

  const inputNameRef = useRef(null)

  const focusOnInputName = () => {
      inputNameRef.current.focus()
  }

  const newMenuItens = [
    {
      menuName: "Inicio",
      menuLink: "#inicio"
    },
    {
      menuName: "Sobre",
      menuLink: "#sobre"
    },
    {
      menuName: "Lista de Livros",
      menuLink: "#lista_de_livros"
    },
    {
      menuName: "Cadastrar Livro",
      menuLink: "#cadastrar_livro"
    }
  ]

  const [booklist, setBookList] = useState(rawBooklist)

  const handleSetBookList = (newBookList) => {
    console.log('Atualizando lista de livros:', newBookList);
    setBookList(newBookList);
  };


  return (
    <div className="App">
      <NavbarComponent
        menuItems={newMenuItens}
      />
      <TitleComponent
        title={"Página Inicial"}
        paragraph={"Bem-vindo ao Reading Journal!"}
        titleID={"inicio"}
      />
      <hr />
      <TitleComponent
        title={"Sobre"}
        paragraph={"Esta é uma uma aplicação para um CRUD de um Reading Journal. Este projeto foi elaborado na Disciplina Desenvolvimento de Sistemas Frontend do Curso de Graduação Online da PUCRS."}
        titleID={"sobre"}
      />
      <BookListComponent
        booklist={booklist}
        setBookList={handleSetBookList}
        focusFunction={focusOnInputName}
      />
      <BookFormComponent
        booklist={booklist}
        setBookList={handleSetBookList}
        inputNameRef={inputNameRef}
      />
    </div>
  );
}

export default App;
