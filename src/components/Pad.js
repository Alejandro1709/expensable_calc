import React, { Fragment } from 'react';
import styled from '@emotion/styled';
import { colors } from '../global/colors';
import PropTypes from 'prop-types';

function Pad({
  category,
  value,
  isOperant,
  children,
  execBtn,
  currentNumber,
  prevNumber,
  operant,
  onPadClick,
  onOperantClick,
  setPreviousNumber,
  isOperationReady,
  setOperationNumber,
  setCurrentNumber,
}) {
  const handleClick = () => {
    // isOperant ? onOperantClick() : onPadClick();
    if (isOperant) {
      onOperantClick();
    } else {
      if (currentNumber === 0 && value === '0') return;
      if (value === '.') currentNumber += `${value}.`;
      onPadClick();
    }
  };

  const handleExec = () => {
    const finalNumber = `${prevNumber} ${operant} ${currentNumber}`;
    const [first, op, second] = finalNumber.split(' ');
    let result;
    if (op === '+') {
      result = Number(first) + Number(second);
    }
    if (op === '-') {
      result = Number(first) - Number(second);
    }
    if (op === 'x') {
      result = Number(first) * Number(second);
    }
    if (op === '/') {
      result = Number(first) / Number(second);
    }
    setPreviousNumber('null');
    setOperationNumber('null');
    setCurrentNumber(result);
  };

  return (
    <Fragment>
      {execBtn ? (
        <StyledPadDone category={category}>
          <div onClick={isOperationReady ? handleExec : handleClick}>
            {children ? children : <span>{value}</span>}
          </div>
        </StyledPadDone>
      ) : (
        <StyledPad onClick={handleClick} operant={isOperant}>
          <div>{children ? children : <span>{value}</span>}</div>
        </StyledPad>
      )}
    </Fragment>
  );
}

export default Pad;

Pad.propTypes = {
  value: PropTypes.string,
  isOperant: PropTypes.bool,
};

const StyledPad = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  border: 0.5px solid #eee;
  background-color: ${(props) => (props.operant ? colors.gray[100] : 'white')};
  cursor: pointer;
  :hover {
    background-color: ${(props) => (props.operant ? colors.gray[200] : '#eee')};
  }
`;

const StyledPadDone = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-row-start: 3 / 6;
  background-color: ${(props) => props.category.color};
  cursor: pointer;
`;
