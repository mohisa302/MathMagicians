import React from 'react';
import renderer from 'react-test-renderer';

import Home from './components/Home';

describe('Home', () => {
  it('Matches the Home DOM Snapshot', () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
