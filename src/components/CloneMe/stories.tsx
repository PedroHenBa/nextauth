import { CloneMe, CloneMeProps } from './index';
import { Meta, Story } from '@storybook/react/types-6-0';

export default {
  title: 'CloneMe',
  component: CloneMe,
  args: {
    footerHtml: 'Testando',
  },
} as Meta;

export const Template: Story<CloneMeProps> = (args) => (
  <div>
    <CloneMe {...args} />
  </div>
);
