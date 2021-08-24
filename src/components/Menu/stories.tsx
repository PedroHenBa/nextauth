import { Menu, MenuProps } from './index';
import { Meta, Story } from '@storybook/react/types-6-0';

export default {
  title: 'Menu',
  component: Menu,
  args: {
    children: 'Text',
  },
  argTypes: {
    children: { type: 'string' },
  },
} as Meta;

export const Template: Story<MenuProps> = (args) => (
  <div>
    <Menu {...args} />
  </div>
);
