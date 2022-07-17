import styled from 'styled-components';
import { FooterPropsType } from './Footer.types';

const Footer: React.FC<FooterPropsType> = ({ children }) => {
  return (
    <Container>
      <Wrapper>
        <Box>{children}</Box>
      </Wrapper>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  width: 100%;
  background-color: #e1e1e1;
  padding: 50px;
`;
const Wrapper = styled.div`
  max-width: 720px;
  margin: 0 auto;
`;

const Box = styled.div`
  width: 270px;
  margin: 0 auto;
  font-size: 10px;
  a {
    color: #0022ee;
    :hover {
      text-decoration: underline;
    }
  }
`;
