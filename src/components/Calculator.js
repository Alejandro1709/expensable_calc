import React from 'react';
import { colors } from '../global/colors';
import { availableFonts } from '../global/typography';
import cart from '../images/cart.png';
import backspace from '../images/icons/backspace.svg';
import checkmark from '../images/icons/checkmark.svg';
import calendar from '../images/icons/calendar.svg';
import styled from '@emotion/styled';

function Calculator() {
  return (
    <StyledCalculator className='calculator'>
      <StyledCalculatorHeader className='calculator__header'>
        <img src={cart} alt='Cart icon' draggable={false} />
        <StyledCalculatorTitle>
          Add expenses to{' '}
          <StyledCalculatorCategory>Groceries</StyledCalculatorCategory>
        </StyledCalculatorTitle>
      </StyledCalculatorHeader>
      <StyledCalculatorDisplay className='calculator__display'>
        <DisplayText>$0</DisplayText>
      </StyledCalculatorDisplay>
      <StyledCalculatorBody className='calculator__pads'>
        {/* First Row */}
        <StyledPad className='pads__pad btn'>
          <span>÷</span>
        </StyledPad>
        <StyledPad className='pads__pad btn'>
          <span>1</span>
        </StyledPad>
        <StyledPad className='pads__pad btn'>
          <span>2</span>
        </StyledPad>
        <StyledPad className='pads__pad btn'>
          <span>3</span>
        </StyledPad>
        <StyledPad className='pads__pad btn'>
          <img src={backspace} alt='backspace icon' draggable={false} />
        </StyledPad>
        {/* Second Row */}
        <StyledPad className='pads__pad btn'>
          <span>x</span>
        </StyledPad>
        <StyledPad className='pads__pad btn'>
          <span>4</span>
        </StyledPad>
        <StyledPad className='pads__pad btn'>
          <span>5</span>
        </StyledPad>
        <StyledPad className='pads__pad btn'>
          <span>6</span>
        </StyledPad>
        <StyledPad className='pads__pad btn'>
          <span>C</span>
        </StyledPad>
        {/* Third Row */}
        <StyledPad className='pads__pad btn'>
          <span>-</span>
        </StyledPad>
        <StyledPad className='pads__pad btn'>
          <span>7</span>
        </StyledPad>
        <StyledPad className='pads__pad btn'>
          <span>8</span>
        </StyledPad>
        <StyledPad className='pads__pad btn'>
          <span>9</span>
        </StyledPad>
        <StyledPadDone className='pads__pad don'>
          <img src={checkmark} alt='checkmark icon' draggable={false} />
        </StyledPadDone>
        {/* Fourth Row */}
        <StyledPad className='pads__pad btn'>
          <span>+</span>
        </StyledPad>
        <StyledPad className='pads__pad btn'>
          <img src={calendar} alt='calendar icon' draggable={false} />
        </StyledPad>
        <StyledPad className='pads__pad btn'>
          <span>0</span>
        </StyledPad>
        <StyledPad className='pads__pad btn'>
          <span>.</span>
        </StyledPad>
        <StyledPad className='pads__pad don'>
          <span>.</span>
        </StyledPad>
      </StyledCalculatorBody>
      <StyledCalculatorFooter className='calculator__footer'>
        <StyledDate>Thursday March, 10, 2022</StyledDate>
      </StyledCalculatorFooter>
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

const StyledCalculatorHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: white;
  background-color: ${colors.cyan[500]};
  border-bottom: 1px solid #eee;
  padding-left: 1rem;
  height: 50px;
`;

const StyledCalculatorTitle = styled.p`
  font-weight: 400;
  width: 150px;
`;

const StyledCalculatorCategory = styled.span`
  font-weight: 500;
`;

const StyledCalculatorDisplay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
`;

const DisplayText = styled.span`
  letter-spacing: 4px;
  font-size: 20px;
  color: ${colors.gray[600]};
`;

const StyledCalculatorBody = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`;

const StyledPad = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  border: 0.5px solid #eee;
  cursor: pointer;
`;

const StyledPadDone = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-row-start: 3 / 6;
  background-color: ${colors.cyan[500]};
  cursor: pointer;
`;

const StyledCalculatorFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 26px;
  background-color: ${colors.gray[100]};
  color: ${colors.gray[600]};
  font-size: 12px;
  font-weight: 400;
  line-height: 1rem;
`;

const StyledDate = styled.span``;
