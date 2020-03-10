import React from 'react';
import './App.css';
import AllLevelPage from './pages/AllLevelPage';
import ChallengePage from './pages/ChallengePage';
import IndexPage from './pages/IndexPage';
import LevelBuilderPage from './pages/LevelBuilderPage';

function App() {
  const route = window.location.hash.slice(1);

  switch (route)
  {
    case '#/challenge': return <ChallengePage />
    case '#/all': return <AllLevelPage />
    case '#/level-builder': return <LevelBuilderPage />
    default: return <IndexPage />
  }
}

export default App;
