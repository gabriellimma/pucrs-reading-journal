import './App.css';
import InicioComponent from './components/InicioComponent/InicioComponent';
import NavbarComponent from './components/NavBar/NavbarComponent';

function App() {

  const menuItems = ["Inicio", "Sobre", "Lista de Livros", "Cadastrar Livro"]

  return (
    <div className="App">
      <NavbarComponent
        menuItems = {menuItems}
      />
      <InicioComponent
        message={"Olá, Bem-vindo(a) a biblioteca open source."}
      />
    </div>
  );
}

export default App;
