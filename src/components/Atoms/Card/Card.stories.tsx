import { ComponentMeta, ComponentStory } from '@storybook/react';
import Card from './Card';

export default {
  title: 'Design System/Atoms/Card',
  component: Card,
} as ComponentMeta<typeof Card>;

const template: ComponentStory<typeof Card> = args => (
  <Card {...args}>Card</Card>
);

export const Default = template.bind({});
Default.args = {};
