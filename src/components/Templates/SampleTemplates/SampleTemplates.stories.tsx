import { ComponentMeta, ComponentStory } from '@storybook/react';
import SampleTemplates from './SampleTemplates';

export default {
  title: 'Design System/Templates/SampleTemplates',
  component: SampleTemplates,
} as ComponentMeta<typeof SampleTemplates>;

const template1: ComponentStory<typeof v> = args => (
  <SampleTemplates{...args}>SampleTemplates<SampleTemplates/>
);

export const Default = template1.bind({});
Default.args = {};