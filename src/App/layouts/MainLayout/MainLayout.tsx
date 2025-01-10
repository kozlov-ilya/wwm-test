import { Outlet } from 'react-router-dom';
import Wrapper from './components/Wrapper';

import styles from './MainLayout.module.scss';

const MainLayout = () => {
  return (
    <div className={styles['MainLayout']}>
      <Wrapper>
        <Outlet />
      </Wrapper>
    </div>
  );
};

export default MainLayout;
