import './App.css';
import InicioComponent from './components/InicioComponent/InicioComponent';
import NavbarComponent from './components/NavBar/NavbarComponent';

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
        message={"Olá, Bem-vindo(a) a biblioteca open source."}
      />
    </div>
  );
}

export default App;
