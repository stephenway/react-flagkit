import React from 'react';
import { mount } from 'enzyme';
import { default as Flag } from '../index';

const country = 'US';
const role = 'img';
const size = 24;
const flagSrc = `./img/SVG/${country}.svg`;
const renderComponent = (props ={}) => mount(
  <Flag country={country} role={role} size={size} {...props} />
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

  // TODO: The prop is returning an empty object
  // it('should have a valid src path', () => {
  //   const renderedComponent = renderComponent();
  //   expect(renderedComponent.find('img').props()).toEqual(flagSrc);
  // });

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
