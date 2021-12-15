import React from 'react';
import { shallow } from 'enzyme';
import NotFountPage from '../../components/NotFound';

test('should render NotFound correctly',()=>{
    const wrapper = shallow(<NotFountPage />);
     expect(wrapper).toMatchSnapshot();

})