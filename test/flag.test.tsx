import React from 'react';
import * as ReactDOM from 'react-dom';
import { Default as Flag } from '../stories/Flag.stories';

describe('Flag', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Flag role="button" />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('renders text when country code is unrecognized', async () => {
    const div = document.createElement('div');
    ReactDOM.render(<Flag country="USSR" size={16} />, div);
    expect(div.innerHTML).toBe('<span>US</span>');
    ReactDOM.unmountComponentAtNode(div);
  });
  it('renders nothing when no country code is supplied', async () => {
    const div = document.createElement('div');
    ReactDOM.render(<Flag country="" alt="Testing" />, div);
    expect(div.innerHTML.length).toBe(0);
    ReactDOM.unmountComponentAtNode(div);
  });
});
