import React from 'react';

export default function Header(props) {
  return (
      <div className='row black-background'>
        <div className='column-full'>
          <img className='small-smile' src='../images/smile.png' alt='smile'/>
          <h1 className='browse-memes'>Browse Memes</h1>
        </div>
      </div>
  );
}
