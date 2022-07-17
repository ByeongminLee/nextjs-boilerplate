import { ComponentMeta, ComponentStory } from '@storybook/react';
import Button from './Button';

export default {
  title: 'Design System/Atoms/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const template1: ComponentStory<typeof Button> = args => (
  <Button {...args}>Button</Button>
);
const template2: ComponentStory<typeof Button> = args => (
  <div style={{ width: '100px' }}>
    <Button {...args}>Button Hover</Button>
  </div>
);

export const Default = template1.bind({});
Default.args = {};

export const hoverButton = template2.bind({});
hoverButton.args = {
  bgColor: '#fff',
  padding: '10px 20px',
  hoverBgColor: '#3e11f1',
  hoverColor: '#fff',
};
