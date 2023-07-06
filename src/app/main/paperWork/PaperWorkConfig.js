import { lazy } from 'react';

const PaperWork = lazy(() => import('./PaperWork'));

const PaperWorkConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/paper-work',
      element: <PaperWork/>,
    },
  ],
};

export default PaperWorkConfig;
