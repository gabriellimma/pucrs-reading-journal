import logo from './logo.svg';
import './App.css';
import InnerComponent from './components/InnerComponent';

function App() {
  return (
    <div className="App">
      <InnerComponent
        logo={logo}
        message="essa é uma mensagem"
        btnMessage="Esse é um botão"
      />
    </div>
  );
}

export default App;
