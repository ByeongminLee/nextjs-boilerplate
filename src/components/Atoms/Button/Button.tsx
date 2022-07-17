import styled from 'styled-components';
import { ButtonPropsType } from './Button.types';

const Button: React.FC<ButtonPropsType> = ({ children, ...props }) => {
  const { onAction } = props;

  return (
    <Container {...props} onClick={onAction && onAction}>
      <p>{children}</p>
    </Container>
  );
};

export default Button;

const Container = styled.button<ButtonPropsType>`
  width: 100%;
  text-align: center;
  cursor: pointer;
  font-size: ${({ fontSize }) => (fontSize ? fontSize : '1rem')};
  padding: ${({ padding }) => (padding ? padding : '5px 10px')};
  margin: ${({ margin }) => (margin ? margin : '0')};
  background-color: ${({ bgColor }) => (bgColor ? bgColor : '#e1e1e1')};
  border: ${({ border }) => (border ? border : '#blue')};
  border-radius: ${({ radius }) => (radius ? radius : '5px')};
  color: ${({ color }) => (color ? color : '1px solid black')};
  :hover {
    background-color: ${({ hoverBgColor }) =>
      hoverBgColor ? hoverBgColor : 'none'};
    color: ${({ hoverColor }) => (hoverColor ? hoverColor : 'none')};
  }
`;
