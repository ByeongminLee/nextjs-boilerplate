import { ComponentMeta, ComponentStory } from '@storybook/react';
import Navbar from './Navbar';

export default {
  title: 'Design System/Modules/Navbar',
  component: Navbar,
} as ComponentMeta<typeof Navbar>;

const template1: ComponentStory<typeof Navbar> = () => <Navbar />;

export const Default = template1.bind({});
Default.args = {};
