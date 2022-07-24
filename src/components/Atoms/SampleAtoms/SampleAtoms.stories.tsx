import { ComponentMeta, ComponentStory } from '@storybook/react';
import SampleAtoms from './SampleAtoms';

export default {
  title: 'Design System/Atoms/SampleAtoms',
  component: SampleAtoms,
} as ComponentMeta<typeof SampleAtoms>;

const template1: ComponentStory<typeof v> = args => (
  <SampleAtoms{...args}>SampleAtoms<SampleAtoms/>
);

export const Default = template1.bind({});
Default.args = {};