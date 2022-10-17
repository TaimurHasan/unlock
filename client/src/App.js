import { useState, useEffect } from 'react';
import Loading from './components/Loading';
import Options from './components/Options';
import Instructions from './components/Instructions';
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
  const [succeeded, setSucceeded] = useState(false);
  const [number, setNumber] = useState();
  const [modalOpen, setModalOpen] = useState(false)

  // hint states
  const [hintOne, setHintOne] = useState();
  const [hintTwo, setHintTwo] = useState();
  const [hintThree, setHintThree] = useState();
  const [hintFour, setHintFour] = useState();




  useEffect(() => {
    setCombo(createNumber());
  }, []);

  useEffect(() => {
    setHintOne(placeOneRightAtRightPlace(combo));
    setHintTwo(placeOneRightAtWrongPlace(combo));
    setHintThree(placeTwoRightAtWrongPlace(combo));
    setHintFour(placeNoRight(combo));
  }, [combo])

  const hints = [
    {
      key: 1,
      description: "This number contains one right number in the right spot",
      number: hintOne
    },
    {
      key: 2,
      description: "This number contains one right number in the wrong spot",
      number: hintTwo
    },
    {
      key: 3,
      description: "This number contains two right numbers in the wrong spots",
      number: hintThree
    },
    {
      key: 4,
      description: "This number contains no right numbers",
      number: hintFour
    },
  ]

  if(!combo || !hintOne || !hintTwo || !hintThree || !hintFour) {
    return ( 
      <div className="App-header">
        <Loading />
      </div>  
    )
  }

  return (
    <div className="App">
      <div className="App-header">
        <Options 
          setCombo={setCombo}
          setSucceeded={setSucceeded}
          setNumber={setNumber}
          setModalOpen={setModalOpen}
        />
        <Header />
        <Input 
          combo={combo}
          succeeded={succeeded}
          number={number}
          setNumber={setNumber}
          setSucceeded={setSucceeded}  
        />
        {hints && hints.map( ({ key, description, number}) => (
          <Hint key={key} description={description} number={number} />
        ))}
        {modalOpen && <Instructions setModalOpen={setModalOpen} />}
      </div>
    </div>
  );
}

export default App;
