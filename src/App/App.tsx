import { Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import { ROUTES } from 'configs/routes';

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path={ROUTES.home} element={<div>App</div>} />
      </Route>
    </Routes>
  );
}

export default App;
