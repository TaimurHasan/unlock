import { useState, useEffect } from 'react';
import Hint from './components/Hint';
import './App.css';

// algorithms
import {
  createNumber,
  placeOneRightAtRightPlace,
  placeOneRightAtWrongPlace
} from './utils/algo';

function App() {
  const [combo, setCombo] = useState([]);

  useEffect(() => {
    setCombo(createNumber());
  }, []);

  
  const hints = [
    {
      key: 1,
      description: "This number contains one right number in the right spot",
      number: placeOneRightAtRightPlace(combo)
    },
    {
      key: 2,
      description: "This number contains one right number in the wrong spot",
      number: placeOneRightAtWrongPlace(combo)
    }
  ]

  return (
    <div className="App">
      <div className="App-header">
        <div>
          {combo}
        </div>
        {hints && hints.map( ({ key, description, number}) => (
          <Hint key={key} description={description} number={number} />
        ))}
      </div>
    </div>
  );
}

export default App;
