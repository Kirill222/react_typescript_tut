import './App.css';
import { Heading } from './components/Heading';
import { Oscar } from './components/Oscar';
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
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>Oscar goes to...</Heading>
      </Oscar>
    </div>
  );
}

export default App;
