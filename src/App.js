import './App.css';
import BookListComponent from './components/BookList/BookListComponent';
import InicioComponent from './components/InicioComponent/InicioComponent';
import NavbarComponent from './components/NavBar/NavbarComponent';
import booklist from './data/booklist.json'

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

  return (
    <div className="App">
      <NavbarComponent
        menuItems={newMenuItens}
      />
      <InicioComponent
        title={"Página Inicial"}
        paragraph = {"Bem-vindo ao Reading Journal!"}
      />
      <BookListComponent
        booklist= {booklist}
      />
    </div>
  );
}

export default App;
