import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { default as ReactSelect } from 'react-select';
import makeAnimated from 'react-select/animated';
import './Select.scss';

const animatedComponents = makeAnimated();

//Note propTypes allow React hook form Controller use and straight use out of form
const selectPropTypes = {
    isInvalid: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
    onBlur: PropTypes.func,
    value: PropTypes.arrayOf(PropTypes.object),
    isSearchable: PropTypes.bool.isRequired,
    isClearable: PropTypes.bool,
    isDisabled: PropTypes.bool,
    isMulti: PropTypes.bool,
    closeMenuOnSelect: PropTypes.bool,
    placeholder: PropTypes.string,
    options: PropTypes.arrayOf(
        PropTypes.exact({
            value: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
        }),
    ).isRequired,
    value: PropTypes.arrayOf(
        PropTypes.exact({
            value: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
        }),
    ),
};

const Select = forwardRef<HTMLInputElement, PropTypes.InferProps<typeof selectPropTypes>>(
    (
        {
            isInvalid,
            onChange,
            onBlur,
            isSearchable,
            isClearable,
            isDisabled,
            isMulti,
            closeMenuOnSelect,
            placeholder,
            options,
            value,
        },
        ref,
    ) => {
        return (
            <ReactSelect
                className={`select ${isInvalid ? 'is-invalid' : ''}`}
                classNamePrefix={isInvalid ? 'select-invalid' : 'select'}
                components={animatedComponents}
                onChange={onChange}
                onBlur={onBlur}
                ref={ref}
                placeholder={placeholder}
                isMulti={isMulti}
                isDisabled={!!isDisabled}
                closeMenuOnSelect={closeMenuOnSelect}
                isClearable={!!isClearable}
                isSearchable={isSearchable}
                options={options}
                value={value}
            />
        );
    },
);
Select.propTypes = selectPropTypes;

export default Select;
