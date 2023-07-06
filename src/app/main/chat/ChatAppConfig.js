import { lazy } from 'react';

const ChatApp = lazy(() => import('./ChatApp'));

const ChatAppConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/chat',
      element: <ChatApp />,
    },
  ],
};

export default ChatAppConfig;
