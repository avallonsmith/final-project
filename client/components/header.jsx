import React from 'react';

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
    this.toggleOpen = this.toggleOpen.bind(this);
  }

  toggleOpen() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    // console.log('STATE:', this.state);

    const isOpen = this.state.isOpen;

    let menuClass = '';
    let hamburgerIcon = 'hidden';

    if (!isOpen) {
      menuClass = 'hidden';
      hamburgerIcon = '';
    }

    return (
      <div>
        <div className='row black-background justify-between center'>
          <div className='column-half'>
              <img className='small-smile' src='../images/smile.png' alt='smile'/>
              <h2 className='browse-memes'>{this.props.title}</h2>
            </div>
              {/* <!-- Top Navigation Menu --> */}
          <div className='column-half'>
            <div className="topnav">
                {/* <!-- Navigation links --> */}
              <div className={menuClass} id="links">
                  <a href="#memes">Browse Memes</a>
                  <a href="#memes">Saved Memes</a>
                  <a href="#add-meme">Add Memes</a>
                </div>
                {/* <!-- "Hamburger menu" / "Bar icon" to toggle the navigation links --> */}
              <button className="icon" onClick={this.toggleOpen}>
                <div className={hamburgerIcon}>
                  <i className="fa fa-bars menu-icon" />
                </div>
                <div className={menuClass}>
                  <i className="far fa-arrow-alt-circle-left back-arrow"></i>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
