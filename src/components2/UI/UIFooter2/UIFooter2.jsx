import React from 'react';
import '../../../index.css'

export const UIFooter2 = ({nameButtons, classButtons, FunctionOnClick}) => {
  return ( 
  <div className='Container'>
     <button onClick={FunctionOnClick} className={classButtons}>{nameButtons}</button>
  </div>
  )
};

export default UIFooter2;

