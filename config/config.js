const config = {
  mode: 'site',
  title: '前端指南',
  description: '一份前端指南和私人技术笔记 🎉',
  base: '/',
  publicPath: '/',
  favicon: './favicon.ico',
  logo: './favicon.png',
  hash: true,
  exportStatic: {},
  // mfsu: {},
  navs: [
    null,
    {
      title: 'Github',
      path: 'https://github.com/zhuziyi1989/front-guidebook',
    },
  ],
  extraBabelPlugins: [
    [
      'import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
      },
    ],
  ],
};

if (process.env.NODE_ENV !== 'development') {
  config.ssr = {};
}

export default config;
