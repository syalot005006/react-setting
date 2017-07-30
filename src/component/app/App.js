import React from 'react';
import styles from './App.scss';

class App extends React.Component {
  render() {
    return (
      <div className={styles['title-area']}>
        <h1 className={styles.title}>hello, world!</h1>
      </div>
    );
  }
}

export default App;