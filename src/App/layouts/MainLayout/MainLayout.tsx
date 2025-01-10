import { Outlet } from 'react-router-dom';

import styles from './MainLayout.module.scss';

const MainLayout = () => {
  return (
    <div className={styles['MainLayout']}>
      <Outlet />
    </div>
  );
};

export default MainLayout;
