import React, { useState } from 'react';
import { availableFonts } from '../global/typography';
import backspace from '../images/icons/backspace.svg';
import checkmark from '../images/icons/checkmark.svg';
import calendar from '../images/icons/calendar.svg';
import styled from '@emotion/styled';
import CalculatorHeader from './CalculatorHeader';
import CalculatorDisplay from './CalculatorDisplay';
import CalculatorFooter from './CalculatorFooter';
import Pad from './Pad';

function Calculator(props) {
  const [prevNumber, setPrevNumber] = useState('null');
  const [operant, setOperant] = useState('null');
  const [currentNumber, setCurrentNumber] = useState('0');

  return (
    <StyledCalculator className='calculator'>
      <CalculatorHeader category={props.category} />
      <CalculatorDisplay currentNumber={currentNumber} />
      <StyledCalculatorBody className='calculator__pads'>
        {/* First Row */}
        <Pad value='÷' isOperant />
        <Pad value='1' onPadClick={() => setCurrentNumber('1')} />
        <Pad value='2' onPadClick={() => setCurrentNumber('2')} />
        <Pad value='3' onPadClick={() => setCurrentNumber('3')} />
        <Pad>
          <img src={backspace} alt='backspace icon' draggable={false} />
        </Pad>
        {/* Second Row */}
        <Pad value='x' isOperant />
        <Pad value='4' onPadClick={() => setCurrentNumber('4')} />
        <Pad value='5' onPadClick={() => setCurrentNumber('5')} />
        <Pad value='6' onPadClick={() => setCurrentNumber('6')} />
        <Pad value='C' onPadClick={() => setCurrentNumber('0')} />
        {/* Third Row */}
        <Pad value='-' isOperant />
        <Pad value='7' onPadClick={() => setCurrentNumber('7')} />
        <Pad value='8' onPadClick={() => setCurrentNumber('8')} />
        <Pad value='9' onPadClick={() => setCurrentNumber('9')} />

        <Pad category={props.category} execBtn>
          <img src={checkmark} alt='checkmark icon' draggable={false} />
        </Pad>
        {/* Fourth Row */}
        <Pad value='+' isOperant />
        <Pad>
          <img src={calendar} alt='calendar icon' draggable={false} />
        </Pad>
        <Pad value='0' onPadClick={() => setCurrentNumber('0')} />
        <Pad value='.' onPadClick={() => setCurrentNumber('.')} />
        <Pad value='.' onPadClick={() => setCurrentNumber('.')} />
      </StyledCalculatorBody>
      <CalculatorFooter />
    </StyledCalculator>
  );
}

export default Calculator;

const StyledCalculator = styled.div`
  font-family: ${availableFonts.primary};
  border: 1px solid #eee;
  border-radius: 8px;
  overflow: hidden;
  user-select: none;
  width: 254px;
`;

const StyledCalculatorBody = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`;
