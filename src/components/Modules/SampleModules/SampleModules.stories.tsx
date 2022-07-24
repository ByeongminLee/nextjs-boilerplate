import { ComponentMeta, ComponentStory } from '@storybook/react';
import SampleModules from './SampleModules';

export default {
  title: 'Design System/Modules/SampleModules',
  component: SampleModules,
} as ComponentMeta<typeof SampleModules>;

const template1: ComponentStory<typeof v> = args => (
  <SampleModules{...args}>SampleModules<SampleModules/>
);

export const Default = template1.bind({});
Default.args = {};