import { useState } from 'react';
import './App.css';

function App() {
  const [counter,setCounter] = useState(0)
  const handleAdd = () => {
    setCounter(counter + 1)
  }
  const handleSub = () => {
    setCounter(counter - 1)
  }
  return (
    <div className="App">
      <button className='counter-button' onClick={handleAdd}>add</button>
      {counter}
      <button className='counter-button' onClick={handleSub}>sub</button>
    </div>
  );
}

export default App;
