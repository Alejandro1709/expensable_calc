import React from 'react';
import styled from '@emotion/styled';
import { colors } from '../global/colors';

function CalculatorFooter() {
  return (
    <StyledCalculatorFooter className='calculator__footer'>
      <StyledDate>Sunday September, 04, 2022</StyledDate>
    </StyledCalculatorFooter>
  );
}

export default CalculatorFooter;

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
