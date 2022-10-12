import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [combo, setCombo] = useState(null);

  useEffect(() => {
    const createNumber = () => {
      let string = "";

      while(string.length < 3) {
        const rand = (Math.floor(Math.random() * 9 + 1));

        // ensure no duplicate numbers
        if (!string.includes(rand)) {
          string += rand;
        }
      }

      setCombo(Number(string));
    }

    createNumber();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
          ok
      </header>
    </div>
  );
}

export default App;
