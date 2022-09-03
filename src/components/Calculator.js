import React from 'react';
import { colors } from '../global/colors';
import { availableFonts } from '../global/typography';
import cart from '../images/cart.png';
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
      <StyledCalculatorBody className='calculator__body'>
        Body
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
  width: 256px;
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

const StyledDate = styled.span``;
