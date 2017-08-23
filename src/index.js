import React from 'react';
import ReactDOM from 'react-dom';
import Dress from './components/Dress';

window.onload = () => {
  ReactDOM.render(
    <div>
        <Dress/>
    </div>,
    document.querySelector('#container')
  );
};
