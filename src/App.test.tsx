import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import App from './App';


describe('App', () => {
  it('renders correctly', () => {
    const component = shallow(<App />);

    expect(component.hasClass('App')).toEqual(true);
    // On the first run of this test, Jest will generate a snapshot file automatically.
  });
});
