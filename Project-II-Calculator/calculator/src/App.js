import React from 'react';
import './App.css';
import RedButton from './components/ButtonComponents/RedBtn';
import WideBtn from './components/ButtonComponents/WideBtnG';
import Display from './components/DisplayComponents/CalculatorDisplay';
import GrayButton from './components/ButtonComponents/grayBtn';

const App = () => {
  return (
    <div className='container'>
      <div className='display'>
        <Display />
      </div>
      <div className='buttons'>
      <div className='row1'>
        <div className='clear'>
          <WideBtn buttonText='clear' />
        </div>
          <RedButton buttonText='÷' /> 
        </div>
      </div>
      <div className='row2'>
        <GrayButton buttonText='7' />
        <GrayButton buttonText='8' />
        <GrayButton buttonText='9' />
        <RedButton buttonText='x' />
      </div>
      <div className='row3'>
        <GrayButton buttonText='4' />
        <GrayButton buttonText='5' />
        <GrayButton buttonText='6' />
        <RedButton buttonText='-' />
      </div>
      <div className='row4'>
        <GrayButton buttonText='1' />
        <GrayButton buttonText='2' />
        <GrayButton buttonText='3' />
        <RedButton buttonText='+' />
      </div>
      <div className='row5'>
        <WideBtn buttonText='0' />
          <div className='equal'>
            <RedButton buttonText='=' />
        </div>
      </div>
    </div>
  );
};
export default App;
