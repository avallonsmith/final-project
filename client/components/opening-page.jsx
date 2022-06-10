import React from 'react';

export default function OpeningButton(props) {
  return (
      <div className='row'>
        <div className='column-full row opening-button-container'>
          <button onClick={() => { location.hash = 'memes'; }} className="opening-button"> </button>
        </div>
      </div>
  );
}
