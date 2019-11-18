import React from 'react';
import ReactDOM from 'react-dom';


import Fullscreen from './fullscreen';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Fullscreen />, div);
  ReactDOM.unmountComponentAtNode(div);
});
