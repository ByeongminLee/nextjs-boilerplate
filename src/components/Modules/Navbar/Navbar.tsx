import styled from 'styled-components';
import { Button, Title } from '@/components/Atoms';

const Navbar = () => {
  const HelloConsole = () => {
    console.log('HelloConsole');
  };
  const BtnProps = {
    fontSize: '15px',
    color: '#333',
    padding: '5px 5px',
    bgColor: '#3ebbee',
    onAction: () => HelloConsole(),
  };
  return (
    <>
      <Container>
        <Wrapper>
          <Title>Navbar</Title>
          <ButtonContainer>
            <Button {...BtnProps}>Hello</Button>
          </ButtonContainer>
        </Wrapper>
      </Container>
      <NavbarBox />
    </>
  );
};

export default Navbar;

const Container = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  border-bottom: 1px solid #eee;
  height: 50px;
  padding: 12px 5px;
  background-color: white;
  z-index: 10000;
`;
const Wrapper = styled.div`
  max-width: 720px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

const NavbarBox = styled.div`
  height: 50px;
  margin-bottom: 20px;
`;
const ButtonContainer = styled.div`
  width: 90px;
`;
