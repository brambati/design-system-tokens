import type { Meta, StoryObj } from '@storybook/html-vite';
import { createButton, type ButtonProps } from './Button';

const meta = {
  title: 'Componentes/Button',
  render: (args) => createButton(args),
  argTypes: {
    variant: { control: 'select', options: ['primary', 'secondary', 'ghost', 'danger'] },
    size: { control: 'radio', options: ['sm', 'md', 'lg'] },
  },
  args: { label: 'Salvar', variant: 'primary', size: 'md' },
} satisfies Meta<ButtonProps>;

export default meta;
type Story = StoryObj<ButtonProps>;

export const Primary: Story = {};
export const Danger: Story = { args: { variant: 'danger', label: 'Excluir' } };
export const Loading: Story = { args: { loading: true, label: 'Salvando' } };
