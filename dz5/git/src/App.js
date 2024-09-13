import React from 'react';
import PostList from './PostList'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>поиск приложений</h1>
      </header>
      <main>
        <PostList />
      </main>
    </div>
  );
}

export default App;