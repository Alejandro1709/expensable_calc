import React from 'react';
import styled from '@emotion/styled';
import { colors } from '../global/colors';

function CalculatorDisplay({ currentNumber }) {
  return (
    <StyledCalculatorDisplay className='calculator__display'>
      <DisplayText>${currentNumber}</DisplayText>
    </StyledCalculatorDisplay>
  );
}

export default CalculatorDisplay;

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
