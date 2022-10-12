import { useState, useEffect } from 'react';
import HintOne from './components/HintOne';
import './App.css';

function App() {
  const [combo, setCombo] = useState([]);

  useEffect(() => {
    const createNumber = () => {
      let comboArr = [];

      while(comboArr.length < 3) {
        const rand = (Math.floor(Math.random() * 9 + 1));

        // ensure no duplicate numbers
        if (!comboArr.includes(rand)) {
          comboArr.push(rand);
        }
      }

      setCombo(comboArr);
    }

    createNumber();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
          <HintOne combo={combo} />
      </header>
    </div>
  );
}

export default App;
