import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hint from './components/Hint';
import Input from './components/Input';
import './App.css';

// algorithms
import {
  createNumber,
  placeOneRightAtRightPlace,
  placeOneRightAtWrongPlace,
  placeTwoRightAtWrongPlace,
  placeNoRight
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
    },
    {
      key: 3,
      description: "This number contains two right numbers in the wrong spots",
      number: placeTwoRightAtWrongPlace(combo)
    },
    {
      key: 4,
      description: "This number contains no right numbers",
      number: placeNoRight(combo)
    },
  ]

  return (
    <div className="App">
      <div className="App-header">
      <div>
          {combo}
        </div>
        <Header />
        <Input combo={combo}/>

        {hints && hints.map( ({ key, description, number}) => (
          <Hint key={key} description={description} number={number} />
        ))}

      </div>
    </div>
  );
}

export default App;
