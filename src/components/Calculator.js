import React, { useState } from 'react';
import { availableFonts } from '../global/typography';
import backspace from '../images/icons/backspace.svg';
import checkmark from '../images/icons/checkmark.svg';
import calendar from '../images/icons/calendar.svg';
import equals from '../images/icons/equals.svg';
import styled from '@emotion/styled';
import CalculatorHeader from './CalculatorHeader';
import CalculatorDisplay from './CalculatorDisplay';
import CalculatorFooter from './CalculatorFooter';
import Pad from './Pad';

function Calculator(props) {
  const [prevNumber, setPrevNumber] = useState('null');
  const [operant, setOperant] = useState('null');
  const [currentNumber, setCurrentNumber] = useState('');
  const [isOperationReady, setIsOperationReady] = useState(false);

  const handleClickOperant = (value) => {
    setPrevNumber(currentNumber);
    setCurrentNumber('');
    setIsOperationReady(true);
    setOperant(value);
  };

  return (
    <StyledCalculator className='calculator'>
      <CalculatorHeader category={props.category} />
      <CalculatorDisplay
        currentNumber={currentNumber}
        operant={operant}
        prevNumber={prevNumber}
      />
      <StyledCalculatorBody className='calculator__pads'>
        {/* First Row */}
        <Pad
          value='÷'
          isOperant
          onOperantClick={() => handleClickOperant('÷')}
        />
        <Pad
          value='1'
          currentNumber
          prevNumber={prevNumber}
          operant={operant}
          onPadClick={() => setCurrentNumber(currentNumber + '1')}
        />
        <Pad
          value='2'
          currentNumber
          prevNumber={prevNumber}
          operant={operant}
          onPadClick={() => setCurrentNumber(currentNumber + '2')}
        />
        <Pad
          value='3'
          currentNumber
          prevNumber={prevNumber}
          operant={operant}
          onPadClick={() => setCurrentNumber(currentNumber + '3')}
        />
        <Pad>
          <img src={backspace} alt='backspace icon' draggable={false} />
        </Pad>
        {/* Second Row */}
        <Pad
          value='x'
          isOperant
          onOperantClick={() => handleClickOperant('x')}
        />
        <Pad
          value='4'
          currentNumber
          prevNumber={prevNumber}
          operant={operant}
          onPadClick={() => setCurrentNumber(currentNumber + '4')}
        />
        <Pad
          value='5'
          currentNumber
          prevNumber={prevNumber}
          operant={operant}
          onPadClick={() => setCurrentNumber(currentNumber + '5')}
        />
        <Pad
          value='6'
          currentNumber
          prevNumber={prevNumber}
          operant={operant}
          onPadClick={() => setCurrentNumber(currentNumber + '6')}
        />
        <Pad
          value='C'
          currentNumber
          prevNumber={prevNumber}
          operant={operant}
          onPadClick={() => setCurrentNumber('')}
        />
        {/* Third Row */}
        <Pad
          value='-'
          isOperant
          prevNumber={prevNumber}
          operant={operant}
          onOperantClick={() => handleClickOperant('-')}
        />
        <Pad
          value='7'
          currentNumber
          prevNumber={prevNumber}
          operant={operant}
          onPadClick={() => setCurrentNumber(currentNumber + '7')}
        />
        <Pad
          value='8'
          currentNumber
          prevNumber={prevNumber}
          operant={operant}
          onPadClick={() => setCurrentNumber(currentNumber + '8')}
        />
        <Pad
          value='9'
          currentNumber
          prevNumber={prevNumber}
          operant={operant}
          onPadClick={() => setCurrentNumber(currentNumber + '9')}
        />

        <Pad
          category={props.category}
          execBtn
          currentNumber={currentNumber}
          prevNumber={prevNumber}
          operant={operant}
          isOperationReady={isOperationReady}
          setCurrentNumber={setCurrentNumber}
          setPreviousNumber={setPrevNumber}
          setOperationNumber={setOperant}
        >
          {isOperationReady ? (
            <img src={equals} alt='equals icon' draggable={false} />
          ) : (
            <img src={checkmark} alt='checkmark icon' draggable={false} />
          )}
        </Pad>
        {/* Fourth Row */}
        <Pad
          value='+'
          isOperant
          onOperantClick={() => handleClickOperant('+')}
        />
        <Pad>
          <img src={calendar} alt='calendar icon' draggable={false} />
        </Pad>
        <Pad value='0' currentNumber onPadClick={() => setCurrentNumber('0')} />
        <Pad
          value='.'
          currentNumber
          prevNumber={prevNumber}
          operant={operant}
          onPadClick={() => setCurrentNumber(`${currentNumber}.`)}
        />
        <Pad
          value='.'
          currentNumber
          prevNumber={prevNumber}
          operant={operant}
          onPadClick={() => setCurrentNumber(currentNumber + '.')}
        />
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
