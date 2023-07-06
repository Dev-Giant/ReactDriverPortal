import { lazy } from 'react';
import { Navigate } from 'react-router-dom';

const ContactsApp = lazy(() => import('./ContactsApp'));

const ContactsAppConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/contacts/:id',
      element: <ContactsApp />,
    },
    {
      path: '/contacts',
      element: <Navigate to="/contacts/all" />,
    },
  ],
};

export default ContactsAppConfig;
