import React from 'react';
import cart from '../images/cart.png';
import styled from '@emotion/styled';

function CalculatorHeader(props) {
  return (
    <StyledCalculatorHeader
      className='calculator__header'
      category={props.category}
    >
      <img src={cart} alt='Cart icon' draggable={false} />
      <StyledCalculatorTitle>
        Add expenses to{' '}
        <StyledCalculatorCategory>
          {props.category.name}
        </StyledCalculatorCategory>
      </StyledCalculatorTitle>
    </StyledCalculatorHeader>
  );
}

export default CalculatorHeader;

const StyledCalculatorHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: white;
  background-color: ${(props) => props.category.color};
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
