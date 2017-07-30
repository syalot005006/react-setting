import React from 'react';
import styles from './App.scss';

class App extends React.Component {
  render() {
    return (
      <div id={styles['app']}>
        <div className={styles['title-area']}>
          <h1 className={styles['title']}>hello, world!</h1>
        </div>
        <img className={styles['image']} src="/image/cat.jpg"/>
      </div>
    );
  }
}

export default App;