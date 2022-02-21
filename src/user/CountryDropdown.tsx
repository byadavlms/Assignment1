import React from 'react';

import Countries from './countries.json';

type CountryType = {
    name: string;
    code: string;
}

type Props = {
    onChange: (countryCode: string) => void;
}

function CountryDropdown({ onChange }: Props) {
    const handleChange = (event: any) => {
        event.stopPropagation();

        onChange(event.target.value);
    }

    return (
        <select name='country' onChange={handleChange}>
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
