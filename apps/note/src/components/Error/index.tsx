import { useRouteError } from 'react-router-dom';

import styles from './index.module.css';

function Error() {
  const error = useRouteError();

  return (
    <div className={styles.wrapper}>
      <p>
        Error!
        <br />
        {(error as { message?: string }).message || 'Unknown error'}
      </p>
    </div>
  );
}

export default Error;
