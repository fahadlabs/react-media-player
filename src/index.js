import React from 'react';
import { render } from 'react-dom';

// import Video from './Video';

render(
  <div>
    <div>
      {[0, 1, 2, 3, 4].map((i) => (
        <div style={{ width: '100%', height: 300, borderTop: '1px solid red' }} key={i} />
      ))}
    </div>
    <Audio
      src={Music}
      next={() => console.log('Next')}
      prev={() => console.log('Previous')}
      title='Audio title which might be 16 to 128 chars long.'
    />
    <div>
      {[0, 1, 2, 3, 4].map((i) => (
        <div style={{ width: '100%', height: 300, borderTop: '1px solid red' }} key={i} />
      ))}
    </div>
  </div>,
  // <Video
  //   src={Music}
  //   title='Audio title which might be 16 to 128 chars long.'
  //   next={() => console.log('next')}
  //   prev={() => console.log('previous')}
  // />,
  document.getElementById('Player')
);
