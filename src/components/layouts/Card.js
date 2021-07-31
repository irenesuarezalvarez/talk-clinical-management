import React from "react";
import styled from "styled-components";


const Card = ({ title, children }) => {
  return (
    <cardContainer>
      <Title>{title}</Title>
      {children}
    </cardContainer>
  );
};

const cardContainer = styled.fieldset`
  background-color: white;
  padding: 1rem 2rem;
  border-radius: 4px;
  border: 1px solid black;
  &:not(:last-of-type) {
    margin-bottom: 2rem;
  }
`;

const Title = styled.h2`
  font-weight: bold;
  color: black;
  margin-bottom: 1rem;
`;

export default Card;