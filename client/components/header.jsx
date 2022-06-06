import React from 'react';

export default function Header(props) {
  return (
    <div>
      <div className='row black-background justify-between center'>
        <div className='column-half'>
            <img className='small-smile' src='../images/smile.png' alt='smile'/>
            <h2 className='browse-memes'>Browse Memes</h2>
          </div>
            {/* <!-- Top Navigation Menu --> */}
        <div className='column-half'>
          <div className="topnav">
              {/* <!-- Navigation links (hidden by default) --> */}
            <div id="links">
                <a href="#">Browse Memes</a>
                <a href="#">Saved Memes</a>
                <a href="#">Add Memes</a>
              </div>
              {/* <!-- "Hamburger menu" / "Bar icon" to toggle the navigation links --> */}
              <a href="javascript:void(0);" className="icon" onClick={myFunction}>
                <i className="fa fa-bars menu-icon"></i>
              </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function myFunction() {
  const x = document.getElementById('links');
  if (x.style.display === 'block') {
    x.style.display = 'none';
  } else {
    x.style.display = 'block';
  }
}
