import React from 'react';
import { mount } from 'enzyme';
import Flag from '../flag';

const content = 'US';
const role = 'img';
const size = 24;
const renderComponent = (props ={}) => mount(
  <Flag content={content} role={role} size={size} {...props} />
);

describe('<Flag />', () => {
  it('should render an <img> tag', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('img').length).toEqual(1);
  });

  it('should have a src attribute', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('img').prop('src')).toBeDefined();
  });

  it('should have a role attribute', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('img').prop('role')).toBeDefined();
  });

  it('should have a height attribute', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('img').prop('height')).toBeDefined();
  });
  it('should have a width attribute', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('img').prop('width')).toBeDefined();
  });
});
