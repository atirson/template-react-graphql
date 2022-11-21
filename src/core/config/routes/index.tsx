import { routes } from '@core/config/routes/routes.config';
import { Routes as Router, Route, BrowserRouter } from 'react-router-dom';

export default function Routes() {
  return (
    <BrowserRouter>
      <Router>
        {
          routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={route.element}
            />
          ))
        }
      </Router>
    </BrowserRouter>
  );
}
