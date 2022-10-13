import { useState, useEffect } from 'react';
import HintOne from './components/HintOne';
import './App.css';

// algorithms
import {
  createNumber,
  placeOneRightAtRightPlace
} from './utils/algo';

function App() {
  const [combo, setCombo] = useState([]);

  useEffect(() => {
    setCombo(createNumber());
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div>
          {combo}
        </div>
        <HintOne combo={combo} />
      </header>
    </div>
  );
}

export default App;
