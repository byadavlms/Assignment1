import React from 'react';

import Countries from './countries.json';

type CountryType = {
    name: string;
    code: string;
}

type Props = {
    onChange: (countryCode: string) => void;
    value: string;
}

function CountryDropdown({ onChange, value }: Props) {
    const handleChange = (event: any) => {
        event.stopPropagation();

        onChange(event.target.value);
    }

    return (
        <select name='country' onChange={handleChange} value={value}>
            <option value=''>Please Select</option>
            {Countries.map((country: CountryType) => {
                return (
                    <option value={country.code} key={country.code}>{country.name}</option>
                )
            })}
        </select>
    )
}

export default CountryDropdown;
