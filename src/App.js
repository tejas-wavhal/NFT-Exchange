import React from 'react';
import { useState, useEffect } from 'react'
import Nft from './Components/Nft';

function App() {
  const [bitcoin, setbitcoin] = useState(100000)
  const [num, setnum] = useState(0)
  const [increaseOrDecrease, setincreaseOrDecrease] = useState(0)

  const [num2, setnum2] = useState(0)
  const [increaseOrDecrease2, setincreaseOrDecrease2] = useState(0)

  const [num3, setnum3] = useState(0)
  const [increaseOrDecrease3, setincreaseOrDecrease3] = useState(0)

  const [num4, setnum4] = useState(0)
  const [increaseOrDecrease4, setincreaseOrDecrease4] = useState(0)

  const [num5, setnum5] = useState(0)
  const [increaseOrDecrease5, setincreaseOrDecrease5] = useState(0)

  const [num6, setnum6] = useState(0)
  const [increaseOrDecrease6, setincreaseOrDecrease6] = useState(0)

  useEffect(() => {
    setInterval(() => {
      let randPrice = Math.floor(Math.random() * (100 - 1) + 1)
      setnum(randPrice)
      let randIncreaseOrDecrease = Math.floor(Math.random() * (3 - 1) + 1)
      setincreaseOrDecrease(randIncreaseOrDecrease)

      let randPrice2 = Math.floor(Math.random() * (100 - 1) + 1)
      setnum2(randPrice2)
      let randIncreaseOrDecrease2 = Math.floor(Math.random() * (3 - 1) + 1)
      setincreaseOrDecrease2(randIncreaseOrDecrease2)


      let randPrice3 = Math.floor(Math.random() * (100 - 1) + 1)
      setnum3(randPrice3)
      let randIncreaseOrDecrease3 = Math.floor(Math.random() * (3 - 1) + 1)
      setincreaseOrDecrease3(randIncreaseOrDecrease3)

      let randPrice4 = Math.floor(Math.random() * (100 - 1) + 1)
      setnum4(randPrice4)
      let randIncreaseOrDecrease4 = Math.floor(Math.random() * (3 - 1) + 1)
      setincreaseOrDecrease4(randIncreaseOrDecrease4)

      let randPrice5 = Math.floor(Math.random() * (100 - 1) + 1)
      setnum5(randPrice5)
      let randIncreaseOrDecrease5 = Math.floor(Math.random() * (3 - 1) + 1)
      setincreaseOrDecrease5(randIncreaseOrDecrease5)

      let randPrice6 = Math.floor(Math.random() * (100 - 1) + 1)
      setnum6(randPrice6)
      let randIncreaseOrDecrease6 = Math.floor(Math.random() * (3 - 1) + 1)
      setincreaseOrDecrease6(randIncreaseOrDecrease6)
    }, 1000);

  }, [])

  return (
    <>
      <div className='container' >
        <Nft num={num} num2={num2} num3={num3} num4={num4} num5={num5} num6={num6} bitcoin={bitcoin} setbitcoin={setbitcoin} increaseOrDecrease={increaseOrDecrease} increaseOrDecrease2={increaseOrDecrease2} increaseOrDecrease3={increaseOrDecrease3} increaseOrDecrease4={increaseOrDecrease4} increaseOrDecrease5={increaseOrDecrease5} increaseOrDecrease6={increaseOrDecrease6} />
      </div>
    </>
  );
}

export default App;
