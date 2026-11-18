import type { Preview } from '@storybook/html-vite';
import '../src/tokens/index.css';

// alterna o tema pelo toolbar do Storybook (light / dark)
const preview: Preview = {
  globalTypes: {
    theme: {
      description: 'Tema',
      toolbar: { icon: 'mirror', items: ['light', 'dark'], dynamicTitle: true },
    },
  },
  initialGlobals: { theme: 'light' },
  decorators: [
    (story, context) => {
      document.documentElement.dataset.theme = context.globals.theme;
      return story();
    },
  ],
  tags: ['autodocs'],
};

export default preview;
