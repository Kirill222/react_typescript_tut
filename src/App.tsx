import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';

function App() {

  const personName = {
    first: 'John',
    last: 'Connor',
  }

  const nameList = [
    {
      first: 'John',
      last: 'Sean',
    },
    {
      first: 'Sean',
      last: 'Smith',
    },
    {
      first: 'Bruce',
      last: 'Jones',
    },
  ]

  return (
    <div className="App">
      <Greet name="TTT" messageCount={10} isLoggedIn={true}/>
      <Person name={personName}/>
      <PersonList names={nameList}/>
    </div>
  );
}

export default App;
