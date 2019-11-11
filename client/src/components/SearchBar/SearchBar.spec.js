import React from 'react';
import SearchBar from './SearchBar';
import { shallow } from 'enzyme';

describe('SearchBar-tests', () => {
  /*let component;
  beforeEach() => {
    component = shallow(<SearchBar/>);
  }*/
  //assign
  it('should pass', () => {
    let input = '';
    const search = 'Search';
    const component = shallow(<SearchBar onFilter={(e) => {input = e.target.value}}/>);

    // act
    component.find('input-[type="text"]').first().simulate('input', { target: { value: search}});

    //assert
    expect(input).toEqual(search);
  });
});
