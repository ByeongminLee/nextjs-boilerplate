import { ComponentMeta, ComponentStory } from '@storybook/react';
import ContentsCard from './ContentsCard';

export default {
  title: 'Design System/Modules/ContentsCard',
  component: ContentsCard,
} as ComponentMeta<typeof ContentsCard>;

const template: ComponentStory<typeof ContentsCard> = args => (
  <ContentsCard {...args}>
    <ul>
      <li>- Nextjs</li>
      <li>- TypesScript</li>
      <li>- styled-components</li>
      <li>- StoryBook</li>
      <li>- Atomic Design pattern</li>
    </ul>
  </ContentsCard>
);

export const Default = template.bind({});
Default.args = {
  title: 'boilerplate',
  buttonText: 'deploy',
  buttonLink: 'https://github.com/ByeongminLee/nextjs-boilerplate',
};
