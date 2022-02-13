import React,{useState, useEffect} from 'react';
import UIFooter2 from '../../UI/UIFooter2/UIFooter2.jsx';
import ImgCounter from '../../img2/astronaut2.jpg'
import '../../../index.css'

export const LayFooter2 = () => {

  const useCounter = () => {
    const [Counting, setCounting] = useState(0); 

    const addCount = () => setCounting(Counting + 10);
    const substractCount = () => setCounting(Counting - 10);
    const resetCount = () => setCounting(0)

    return {Counting, addCount, substractCount, resetCount}
  }
  const {Counting, addCount, substractCount, resetCount} = useCounter()

  useEffect(() => {
    const Image = document.getElementById('ImgEffect');

    if (Counting >= 100) {
      Image.style.filter = 'brightness()'
    } 
    else {
      Image.style.filter = 'grayscale()'
    }

  })

  return (
      <div>
        <div className='principalImage'>
          <img id='ImgEffect' src={ImgCounter} className="ImageContent" alt="Img"></img>
        </div>
        <h1 className='counterId'>{Counting}</h1>
        <div className="containButtons">
            <UIFooter2 FunctionOnClick={addCount} classButtons = "btnAdd" nameButtons= "+"></UIFooter2>
            <UIFooter2 FunctionOnClick={resetCount} classButtons = "btnReset" nameButtons= "Reset"></UIFooter2>
            <UIFooter2 FunctionOnClick={substractCount} classButtons = "btnSubstract" nameButtons= "-"></UIFooter2>
        </div>
      </div>
  );
  };