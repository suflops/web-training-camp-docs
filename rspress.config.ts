import * as path from 'path';
import { defineConfig } from 'rspress/config';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: '前端训练营',
  description: 'Rspack-based Static Site Generator',
  icon: '/rspress-icon.png',
  logo: {
    light: '/rspress-light-logo.png',
    dark: '/rspress-dark-logo.png',
  },
  multiVersion: {
    default: '2024',
    versions: ['2024'],
  },
  themeConfig: {
    footer: {
      message: '© 2024 The Open SUFLOPS Labs. All Rights Reserved.'
    }
  },
});
