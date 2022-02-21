// import React from 'react';
// import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Registration from '../../user/Registration';

jest.mock('formik'); // formik package is auto mocked

describe('Registration', () => {
    it('renders correctly', () => {
        const component = shallow(<Registration />);

        expect(component).toMatchSnapshot();
        // On the first run of this test, Jest will generate a snapshot file automatically.
    });

    it("should render Register as heading of the page", () => {
        const wrapper = shallow(<Registration />);
        const heading = <h1>Register</h1>;
        expect(wrapper.contains('Register')).toEqual(true);
    });

});
