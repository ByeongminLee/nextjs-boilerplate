---
to: src/components/<%= category%>/<%= name %>/<%= name %>.stories.tsx
---
import { ComponentMeta, ComponentStory } from '@storybook/react';
import <%= name %> from './<%= name %>';

export default {
  title: 'Design System/<%= category %>/<%= name %>',
  component: <%= name %>,
} as ComponentMeta<typeof <%= name %>>;

const template1: ComponentStory<typeof v> = args => (
  <<%= name %>{...args}><%= name %><<%= name %>/>
);

export const Default = template1.bind({});
Default.args = {};