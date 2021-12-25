import './App.css';
import { Status } from './components/Status';

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
      <Status status="loading"/>
    </div>
  );
}

export default App;
