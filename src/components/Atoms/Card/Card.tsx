import styled from 'styled-components';
import { CardPropsType } from './Card.types';

const Card: React.FC<CardPropsType> = ({ children, ...props }) => {
  return <Container {...props}>{children}</Container>;
};

export default Card;

const Container = styled.div<CardPropsType>`
  width: 100%;
  max-width: ${({ width }) => (width ? width : '100px')};
  height: ${({ height }) => (height ? height : '100px')};
  padding: ${({ padding }) => (padding ? padding : '5px 10px')};
  margin: ${({ margin }) => (margin ? margin : '0')};
  background-color: ${({ bgColor }) => (bgColor ? bgColor : '#fff')};
  border: ${({ border }) => (border ? border : '1px solid #333')};
  border-radius: ${({ radius }) => (radius ? radius : '5px')};
`;
