import { useState } from 'react';
import styled from 'styled-components';

import { Button, Title } from '@/components/Atoms';
import { ContentsCard } from '@/components/Modules';
import useResponsive from '@/hooks/useResponsive';
import { getSample } from '@/Utils';

const HomeTemplate = () => {
  const [sample, setSample] = useState<any>();
  const { size } = useResponsive();

  const ContentsCardProps1 = {
    title: 'boilerplate',
    buttonText: 'deploy',
    buttonLink: 'https://github.com/ByeongminLee/nextjs-boilerplate',
  };
  const ContentsCardProps2 = {
    title: 'Nextjs',
    buttonText: 'view',
    buttonLink: 'https://nextjs.org/',
  };
  const ContentsCardProps3 = {
    title: 'styled-components',
    buttonText: 'view',
    buttonLink: 'https://styled-components.com/',
  };
  const ContentsCardProps4 = {
    title: 'storybook',
    buttonText: 'view',
    buttonLink: 'https://storybook.js.org/',
  };
  const BtnProps = {
    bgColor: 'white',
    onAction: () => utilsSample(),
    border: '1px solid #222',
  };
  const utilsSample = () => {
    console.log(sample);
    setSample(getSample());
  };

  return (
    <div>
      <Title>HomeTemplate Area</Title>

      <Wrapper>
        <ContentsCard {...ContentsCardProps1}>
          <ul>
            <li>- Nextjs</li>
            <li>- TypesScript</li>
            <li>- styled-components</li>
            <li>- StoryBook</li>
            <li>- Atomic Design pattern</li>
          </ul>
        </ContentsCard>
        <ContentsCard {...ContentsCardProps2}>
          <p>
            Next.js gives you the best developer experience with all the
            features you need for production: hybrid static & server rendering,
            TypeScript support, smart bundling, route pre-fetching, and more. No
            config needed.
          </p>
        </ContentsCard>
        <ContentsCard {...ContentsCardProps3}>
          <p>
            Use the best bits of ES6 and CSS to style your apps without stress
            💅🏾
          </p>
        </ContentsCard>
        <ContentsCard {...ContentsCardProps4}>
          <p>
            Storybook is an open source tool for building UI components and
            pages in isolation. It streamlines UI development, testing, and
            documentation.
          </p>
        </ContentsCard>
      </Wrapper>
      <div style={{ width: '300px', padding: '0 30px' }}>
        <div style={{ margin: '50px 0' }}>
          <Button {...BtnProps}>try utils function sample</Button>
          <p>{sample}</p>
        </div>
        <div>
          <h3>useResponsive hooks</h3>
          <p>current window size: {size}</p>
        </div>
      </div>
    </div>
  );
};

export default HomeTemplate;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
