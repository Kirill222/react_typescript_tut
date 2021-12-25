import './App.css';
import { Button } from './components/Button';
import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import { Oscar } from './components/Oscar';
import { Status } from './components/Status';

function App() { 
  
  const handleClick = () => {
    console.log('clicked')
  }

  return (
    <div className="App">
      <Button handleClick={handleClick}/>
    </div>
  );
}

export default App;
