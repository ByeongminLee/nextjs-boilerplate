import styled from 'styled-components';
import { Button, Card, Title } from '@/components/Atoms';
import { ContentsCardPropsType } from './ContentsCard.types';

const ContentsCard: React.FC<ContentsCardPropsType> = ({
  children,
  ...props
}) => {
  const cardProps = {
    width: '230px',
    height: '280px',
    padding: '10px',
    border: '1px solid #222',
    margin: '20px 10px',
  };
  const buttonProps = {
    bgColor: '#fff',
    border: '1px solid #0000f0',
    hoverBgColor: '#c3eaff',
    hoverColor: '#f00000',
  };
  return (
    <Card {...cardProps}>
      <Title>{props.title || 'title'}</Title>
      <Contents>{children}</Contents>
      <a href={props.buttonLink} target="_blank" rel="noreferrer">
        <Button {...buttonProps}>{props.buttonText || 'Button'}</Button>
      </a>
    </Card>
  );
};

export default ContentsCard;

const Contents = styled.div`
  min-height: 200px;
  padding: 17px 0;
  li {
    padding: 1px 0;
  }
`;
