import './App.css';
import GreetingsComponent from './components/GreetingsComponent/GreetingsComponent';
import person from './data/person';

function App() {

  const { name, age, gender } = person;

  return (
    <div className="App">
      <GreetingsComponent
        name={name}
        age={age}
        gender={gender}
      />
    </div>
  );
}

export default App;
