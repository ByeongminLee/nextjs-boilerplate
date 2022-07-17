import { Navbar, Footer } from '@/components/Modules';
import styled from 'styled-components';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <Container>
        <Wrapper>
          <div style={{ minHeight: '90vh' }}>{children}</div>
        </Wrapper>
      </Container>
      <Footer>
        <span>© 2022</span>
        <a
          href="https://github.com/ByeongminLee"
          target="_blank"
          rel="noreferrer"
        >
          BYEONGMIN LEE
        </a>
        &nbsp;
        <span>powered by</span>
        &nbsp;
        <a
          href="https://github.com/ByeongminLee/nextjs-boilerplate"
          target="_blank"
          rel="noreferrer"
        >
          nextjs-boilerplate
        </a>
      </Footer>
    </>
  );
};

export default Layout;

const Container = styled.div`
  width: 100%;
`;

const Wrapper = styled.div`
  max-width: 720px;
  margin: 0 auto;
`;
