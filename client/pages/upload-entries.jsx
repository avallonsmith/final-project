import React from 'react';
import Header from '../components/header.jsx';

export default class AddMemes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgUrl: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ imgUrl: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    // console.log('Submit:', this.state.imgUrl);
  }

  render() {
    // console.log('STATE:', this.state);

    return (
      <div>
        <div>
          <Header title='Upload Memes'/>
        </div>
        <div className='row center-row move-down'>
          <form onSubmit={this.handleSubmit}>
            <input value={this.state.imgUrl} onChange={this.handleChange} className="url" type="text" placeholder="Paste an image URL here" />
            <button className='add-button'>Add Image</button>
          </form>
        </div>
        <div className='row space-memes'>
          <img className="uploaded-meme" src={this.state.imgUrl} />
        </div>
        <div>
          <i className="fas fa-pen-square edit-icon"></i>
        </div>
      </div>
    );
  }
}
