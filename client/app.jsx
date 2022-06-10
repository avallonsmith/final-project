import React from 'react';
import parseRoute from './lib/parse-route';
import OpeningPage from './pages/opening-screen';
import ViewEntries from './pages/view-entries';
import UploadEntries from './pages/upload-entries';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      route: parseRoute(location.hash)
    };
  }

  componentDidMount() {
    window.addEventListener('hashchange', () => {
      this.setState({
        route: parseRoute(location.hash)
      });
    });
  }

  renderRoute() {
    const route = this.state.route;

    if (route.path === '') {
      return <OpeningPage />;
    }
    if (route.path === 'memes') {
      return <ViewEntries />;
    }
    if (route.path === 'add-meme') {
      return <UploadEntries />;
    }
  }

  render() {
    return (
      <div className="container">
        { this.renderRoute() }
      </div>
    );
  }
}
