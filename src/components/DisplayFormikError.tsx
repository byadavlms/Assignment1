import { ErrorMessage } from "formik";

const DisplayFormikError = ({ name }: { name: string }) => (
    <ErrorMessage name={name}>
        {(msg) => (
            <span style={{
                display: 'block',
                color: 'red',
                marginLeft: '130px'
            }}>
                {msg}
            </span>
        )}
    </ErrorMessage>
);

export default DisplayFormikError;
