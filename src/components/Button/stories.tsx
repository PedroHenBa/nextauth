import { Button, ButtonProps } from './index';
import { Meta, Story } from '@storybook/react/types-6-0';

export default {
  title: 'Button',
  component: Button,
  args: {
    children: 'Texto do botao',
  },
  decorators: [
    (Story) => (
      <div style={{ padding: '3.2rem' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    icon: {
      type: null,
    },
  },
} as Meta<ButtonProps>;

export const Template: Story<ButtonProps> = (args) => (
  <div>
    <Button {...args} />
  </div>
);
