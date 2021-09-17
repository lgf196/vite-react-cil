import React, { FC } from 'react';
import SvgComponent from './components/svgIcon';
import { Button } from 'antd';
import styles from './app.module.scss';
const App: FC = () => {
  // const xxx = import.meta.env.VITE_APP_ANT;
  return (
    <div className={styles.App}>
      <Button type="primary" danger>
        Primary Button
      </Button>
      <Button>Default Button</Button>
      <SvgComponent iconClass="close" />
    </div>
  );
};

export default App;
