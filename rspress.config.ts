import * as path from 'path';
import { defineConfig } from 'rspress/config';
import alignImage from 'rspress-plugin-align-image';

export default defineConfig({
  base: "/web-training-camp-docs",
  root: path.join(__dirname, 'docs'),
  title: '前端训练营',
  description: 'Rspack-based Static Site Generator',
  icon: '/rspress-icon.png',
  plugins: [alignImage()],
  multiVersion: {
    default: '2024',
    versions: ['2024'],
  },
  markdown: {
    showLineNumbers: true,
  },
  themeConfig: {
    outlineTitle: '本节大纲',
    lastUpdated: true,
    lastUpdatedText: "上次更新时间",
    prevPageText: '上一节',
    nextPageText: '下一节',
    footer: {
      message: '© 2024 The Open SUFLOPS. All Rights Reserved.'
    }
  },
});
