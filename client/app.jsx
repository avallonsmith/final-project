import React from 'react';
// import OpeningPage from './pages/open.jsx';
// import ViewEntries from './pages/view-entries.jsx';
import UploadEntries from './components/upload.jsx';

export default class App extends React.Component {
  render() {
    return (
      <div className="container">
        {/* <OpeningPage /> */}
        {/* <ViewEntries /> */}
        <UploadEntries />
      </div>
    );
  }
}
