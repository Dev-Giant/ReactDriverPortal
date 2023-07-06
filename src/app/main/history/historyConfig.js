import { lazy } from 'react';

const History = lazy(() => import('./history'));

const HistoryConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/history',
      element: <History/>,
    },
  ],
};

export default HistoryConfig;
