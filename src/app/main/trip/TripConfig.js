import { lazy } from 'react';

const Trip = lazy(() => import('./Trip'));
const Trips = lazy(() => import('./Trips'));

const TripConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/trips',
      element: <Trips/>,
    },
    {
      path: '/trips/:id',
      element: <Trip/>
    },
  ],
};

export default TripConfig;
