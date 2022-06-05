import React from 'react';
import { MdPlace } from 'react-icons/md';
import styled from 'styled-components';
import PText from './PText';

const ItemStyles = styled.div`
  padding: 1rem;
  background-color:black;
  display: flex;
  width:103%;
  color:gray;
  align-items: center;
  border-radius: 8px;
  margin-bottom: 1rem;
  .icon {
    color: orange;
    background-color: black;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    margin-right: 4px;
  }
  svg {
    width: 3.5rem;
  }
`;

export default function ContactInfoItem({
  icon = <MdPlace size={45}/>,
  text = 'I need text ',
}) {
  return (
    <ItemStyles>
      <div className="icon">{icon}</div>
      <div className="info">
        <PText>{text}</PText>
      </div>
    </ItemStyles>
  );
}