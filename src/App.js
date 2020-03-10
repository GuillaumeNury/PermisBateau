import React from 'react';
import './App.css';
import AllLevelPage from './pages/AllLevelPage';
import ChallengePage from './pages/ChallengePage';
import IndexPage from './pages/IndexPage';
import LevelBuilderPage from './pages/LevelBuilderPage';


export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
        route: this._getCurrentRoute(),
    }

    this.hashChangeHandler = () => this._onHachChange();
  }

  componentDidMount() {
      window.addEventListener('hashchange', this.hashChangeHandler);
  }

  componentWillUnmount() {
      window.removeEventListener('hashchange', this.hashChangeHandler);
  }

  _onHachChange() {
      this.setState({ route: this._getCurrentRoute(), });
  }

  _getCurrentRoute() {
      return window.location.hash.slice(1);
  }

  render() {
    switch (this.state.route)
    {
      case '/challenge': return <ChallengePage />
      case '/all': return <AllLevelPage />
      case '/level-builder': return <LevelBuilderPage />
      default: return <IndexPage />
    }
  }
}