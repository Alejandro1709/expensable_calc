import React from 'react';
import styled from '@emotion/styled';
import { colors } from '../global/colors';
import PropTypes from 'prop-types';

function CalculatorDisplay({ currentNumber, prevNumber, operant }) {
  return (
    <StyledCalculatorDisplay>
      <DisplayText>
        ${prevNumber !== 'null' ? prevNumber : ''}
        {operant !== 'null' ? operant : ''}
        {currentNumber ? currentNumber : '0'}
      </DisplayText>
    </StyledCalculatorDisplay>
  );
}

export default CalculatorDisplay;

CalculatorDisplay.propTypes = {
  currentNumber: PropTypes.string,
  prevNumber: PropTypes.string,
  operant: PropTypes.string,
};

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
