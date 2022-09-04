import React from 'react';
import styled from '@emotion/styled';
import { colors } from '../global/colors';
import PropTypes from 'prop-types';

function CalculatorFooter({ date }) {
  return (
    <StyledCalculatorFooter className='calculator__footer'>
      <StyledDate>{date}</StyledDate>
    </StyledCalculatorFooter>
  );
}

export default CalculatorFooter;

CalculatorFooter.propTypes = {
  date: PropTypes.string,
};

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
