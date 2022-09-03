import React from 'react';
import { colors } from '../global/colors';
import { availableFonts } from '../global/typography';
import Cart from '../images/cart.png';
import styled from '@emotion/styled';

function Calculator() {
  return (
    <StyledCalculator className='calculator'>
      <StyledCalculatorHeader className='calculator__header'>
        <img src={Cart} alt='Cart icon' draggable={false} />
        <StyledCalculatorTitle>
          Add expenses to <span>Groceries</span>
        </StyledCalculatorTitle>
      </StyledCalculatorHeader>
      <StyledCalculatorDisplay className='calculator__display'>
        <span>$0</span>
      </StyledCalculatorDisplay>
      <StyledCalculatorBody className='calculator__body'>
        Body
      </StyledCalculatorBody>
      <StyledCalculatorFooter className='calculator__footer'>
        <span>Thursday March, 10, 2022</span>
      </StyledCalculatorFooter>
    </StyledCalculator>
  );
}

export default Calculator;

const StyledCalculator = styled.div`
  font-family: ${availableFonts.primary};
  border: 1px solid #eee;
  width: 256px;
`;

const StyledCalculatorHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: white;
  background-color: ${colors.cyan[500]};
  border-bottom: 1px solid #eee;
  height: 50px;
`;

const StyledCalculatorTitle = styled.p`
  width: 150px;
`;

const StyledCalculatorDisplay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
`;

const StyledCalculatorBody = styled.div``;

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
