import './App.css';
import { Button } from './components/Button';
import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import { Input } from './components/Input';
import { Oscar } from './components/Oscar';
import { Status } from './components/Status';

function App() { 
  
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>, id: number) => {
    console.log('clicked', event, id)
  }

  return (
    <div className="App">
      <Button handleClick={handleClick} />
      <Input value='' handleChange={event => console.log(event)} />
    </div>
  );
}

export default App;
