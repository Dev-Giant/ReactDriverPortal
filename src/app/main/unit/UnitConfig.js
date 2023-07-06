import { lazy } from 'react';

const Unit = lazy(() => import('./Unit'));

const UnitConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/unit',
      element: <Unit/>,
    },
  ],
};

export default UnitConfig;
