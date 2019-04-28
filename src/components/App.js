import React from 'react';
import styles from './App.module.scss';

import PostList from './PostList';

function App() {
  return (
    <div>
      <h1 className={styles.heading}>A React Blog Component !</h1>
      <PostList />
    </div>
  );
}

export default App;
