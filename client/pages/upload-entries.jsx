import React from 'react';
import Header from '../components/header.jsx';

export default class AddMemes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgUrl: '',
      title: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    fetch('/api/memes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(this.state)
    })
      .then(resp => resp.json())
      .then(meme => {
        location.hash = 'memes';
      });
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
            <div className='row'>
              <input name="imgUrl" value={this.state.imgUrl} onChange={this.handleChange} className="url" type="text" placeholder="Paste an image URL here" />
            </div>
            <div className='row'>
              <input name="title" value={this.state.title} onChange={this.handleChange} className="url move" type="text" placeholder="Add Caption" />
            </div>
            <div className='row center-row move-button'>
              <button className='add-button'>ADD</button>
              <button className='view-button'>VIEW</button>
              <button className='delete-button'>DELETE</button>
            </div>
          </form>
        </div>
        <div className='row space-memes center-row uploaded-down'>
          <img className="uploaded-meme" src={this.state.imgUrl} />
        </div>
        {/* <div>
          <i className="fas fa-pen-square edit-icon"></i>
        </div> */}
      </div>
    );
  }
}
