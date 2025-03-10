import { useState } from 'react';
import './App.css';
import BookFormComponent from './components/BookForm/BookFormComponent';
import BookListComponent from './components/BookList/BookListComponent';
import InicioComponent from './components/InicioComponent/InicioComponent';
import NavbarComponent from './components/NavBar/NavbarComponent';
import rawBooklist from './data/booklist.json'

function App() {

  const newMenuItens = [
    {
      menuName: "Inicio",
      menuLink: "home"
    },
    {
      menuName: "Sobre",
      menuLink: "#_"
    },
    {
      menuName: "Lista de Livros",
      menuLink: "#_"
    },
    {
      menuName: "Cadastrar Livro",
      menuLink: "#_"
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
      <InicioComponent
        title={"Página Inicial"}
        paragraph={"Bem-vindo ao Reading Journal!"}
      />
      <BookListComponent
        booklist={booklist}
        setBookList={handleSetBookList}
      />
      <BookFormComponent
        booklist={booklist}
        setBookList={handleSetBookList}
      />
    </div>
  );
}

export default App;
