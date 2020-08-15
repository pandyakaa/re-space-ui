import React, { FunctionComponent } from 'react';
import { DropdownStyle } from './style';

interface DropdownInputProps {
    formKey: string;
    list: any[];
    handleChange;
    defaultValue?: string | string[];
}

const Dropdown: FunctionComponent<DropdownInputProps> = ({
    formKey,
    handleChange,
    list,
    defaultValue
}: DropdownInputProps) => {
    return (
        <DropdownStyle onChange={(event) => handleChange(formKey, event.target.value)}>
            {list.map((item, idx) => (
                <option key={idx} value={item} selected={item === defaultValue}>
                    {item}
                </option>
            ))}
        </DropdownStyle>
    );
};

export default Dropdown;
