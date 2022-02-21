import { shallow } from 'enzyme';
import DisplayFormikError from '../../components/DisplayFormikError';

jest.mock('formik'); // formik package is auto mocked

describe('DisplayFormikError', () => {
    it('renders correctly', () => {
        const component = shallow(<DisplayFormikError name='fieldName' />);

        expect(component).toMatchSnapshot();
        // On the first run of this test, Jest will generate a snapshot file automatically.
    });

    it('should render and recieve name as props', () => {
        const component = shallow(<DisplayFormikError name='fieldName' />);

        expect(component.props().name).toEqual('fieldName');
    });
});
