import React from 'react';
// import OpeningPage from './pages/open.jsx';
import BrowsePage from './pages/browse.jsx';

export default class App extends React.Component {
  render() {
    return (
      <div className="container">
        {/* <OpeningPage /> */}
        <BrowsePage />
      </div>
    );
  }
}
