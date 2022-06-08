import React from 'react';
// import OpeningPage from './pages/open.jsx';
import ViewEntries from './pages/view-entries.jsx';

export default class App extends React.Component {
  render() {
    return (
      <div className="container">
        {/* <OpeningPage /> */}
        <ViewEntries />
      </div>
    );
  }
}
