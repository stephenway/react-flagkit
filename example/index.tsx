import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Flag } from '../.';

const App = () => {
  return (
    <div>
      <Flag />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
