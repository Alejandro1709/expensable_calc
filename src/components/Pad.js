import React, { Fragment } from 'react';
import styled from '@emotion/styled';
import { colors } from '../global/colors';

function Pad({ category, value, isOperant, children, execBtn, onPadClick }) {
  const handleClick = () => {
    isOperant ? console.log('Operant') : onPadClick();
  };

  return (
    <Fragment>
      {execBtn ? (
        <StyledPadDone category={category}>
          <div onClick={handleClick}>
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
