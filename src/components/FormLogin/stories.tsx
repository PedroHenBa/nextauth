import { FormLogin, FormLoginProps } from './index';
import { Meta, Story } from '@storybook/react/types-6-0';

export default {
  title: 'FormLogin',
  component: FormLogin,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => {
      return (
        <div style={{ padding: '4rem' }}>
          <Story />
        </div>
      );
    },
  ],
} as Meta<FormLoginProps>;

export const Template: Story<FormLoginProps> = (args) => <FormLogin {...args} />;

export const WithError: Story<FormLoginProps> = (args) => <FormLogin {...args} />;

WithError.args = {
  errorMessage: 'error',
};
