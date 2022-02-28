// import React from 'react';
// import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';
import Registration from '../../user/Registration';

jest.mock('formik'); // formik package is auto mocked

describe('Registration', () => {
    it('renders correctly', () => {
        const component = shallow(<Registration />);

        expect(component).toMatchSnapshot();
        // On the first run of this test, Jest will generate a snapshot file automatically.
    });

});
