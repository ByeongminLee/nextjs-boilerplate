import styled from 'styled-components';
import { TitlePropsType } from './Title.types';

const Title: React.FC<TitlePropsType> = ({ children }) => {
  return <Text>{children}</Text>;
};

export default Title;

const Text = styled.h1`
  font-size: 20px;
`;
