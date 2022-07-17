import { ComponentMeta, ComponentStory } from '@storybook/react';
import Title from './Title';

export default {
  title: 'Design System/Atoms/Title',
  component: Title,
} as ComponentMeta<typeof Title>;

const template: ComponentStory<typeof Title> = args => (
  <Title {...args}>Title</Title>
);

export const Default = template.bind({});
Default.args = {};
