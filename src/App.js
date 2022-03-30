import React from 'react';
import Page from './Page';
import { request } from './test';
import './style.scss';

const App = () => {
  console.log(request);
  return (
    <div>
      <div
        onClick={(t) => {
          console.log(request);
        }}
      >
        {' '}
        hello world！！
      </div>
      <div>
        <Page />
      </div>
    </div>
  );
};

export default App;
