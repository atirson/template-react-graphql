import { RouteProps } from 'react-router-dom';
import { Home } from '@app/pages/Home';

export const routes: RouteProps[] = [
  {
    path: '*',
    element: (
      <div>
        <h1>Not found!</h1>
      </div>
    ),
  },
  {
    path: '/',
    element: <Home />,
  },
];
