import { ComponentMeta, ComponentStory } from '@storybook/react';
import Footer from './Footer';

export default {
  title: 'Design System/Modules/Footer',
  component: Footer,
} as ComponentMeta<typeof Footer>;

const template: ComponentStory<typeof Footer> = () => (
  <Footer>
    <span>© 2022</span>
    <a href="https://github.com/ByeongminLee" target="_blank" rel="noreferrer">
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
);

export const Default = template.bind({});
