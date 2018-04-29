
import { reloadRoutes } from 'react-static/node';
import chokidar from 'chokidar';

import renderToHtml from './src/modules/render-styles';
import Document from './src/components/document';
import jdown from './src/modules/get-content';

chokidar.watch('content').on('all', () => reloadRoutes())

const getRoutes = async () => {
  const { home } = await jdown('src/content');
  console.log('content', home)
  return [
    {
      path: `/`,
      component: 'src/pages/Home',
      getData: () => ({
        ...home
      }),
    },
    {
      is404: true,
      component: 'src/pages/404',
    },
  ]
};

export default {
  getSiteData: () => ({
    title: 'Trang Nguyen',
  }),
  getRoutes,
  siteRoot: 'https://trangnguyen.de',
  renderToHtml,
  Document,
};