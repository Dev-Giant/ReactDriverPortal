import { lazy } from 'react';

const HomeRequest = lazy(() => import('./HomeRequest'));

const HomeRequestConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/home-request',
      element: <HomeRequest/>,
    },
  ],
};

export default HomeRequestConfig;
