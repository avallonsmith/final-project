import React from 'react';
import Header from '../components/header.jsx';

export default class BrowsePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      memes: [],
      activeIndex: 0
    };

    this.nextImg = this.nextImg.bind(this);
    this.previousImg = this.previousImg.bind(this);
  }

  componentDidMount() {
    // When the component loads, make
    // request to server to get meme data

    fetch('/api/memes')
      .then(resp => resp.json())
      .then(memes => {
        this.setState({ memes });
      });
  }

  nextImg() {
    let nextIndex = this.state.activeIndex + 1;

    if (nextIndex >= this.state.memes.length) {
      nextIndex = 0;
    }

    this.setState({ activeIndex: nextIndex });
  }

  previousImg() {
    let previousIndex = this.state.activeIndex - 1;

    if (previousIndex < 0) {
      previousIndex = this.state.memes.length - 1;
    }

    this.setState({ activeIndex: previousIndex });
  }

  render() {

    // console.log('STATE:', this.state);

    const memes = this.state.memes;
    const activeIndex = this.state.activeIndex;

    let imageUrl = '';
    let title = 'No Meme...';

    if (memes[activeIndex]) {
      imageUrl = memes[activeIndex].photoUrl;
      title = memes[activeIndex].title;
    }

    return (
      <div>
        <Header title='Browse Memes'/>
        <div>
          <div className='row center-title'>
            <h2 className='meme-title'>{title}</h2>
          </div>
          <div className='row center-row'>
            <i className="fas fa-arrow-alt-circle-left left-arrow" onClick={this.previousImg}></i>
            <img className='adjust-meme' src={imageUrl}></img>
            <i className="fas fa-arrow-alt-circle-right right-arrow" onClick={this.nextImg}></i>
          </div>
        </div>
      </div>
    );
  }
}
