import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { default as ReactSelect } from 'react-select';
import makeAnimated from 'react-select/animated';
import './Select.scss';

const animatedComponents = makeAnimated();

const selectPropTypes = {
    isInvalid: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
    onBlur: PropTypes.func.isRequired,
    value: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
    isSearchable: PropTypes.bool.isRequired,
    isClearable: PropTypes.bool.isRequired,
    isDisabled: PropTypes.bool.isRequired,
    isMulti: PropTypes.bool.isRequired,
    closeMenuOnSelect: PropTypes.bool.isRequired,
    placeholder: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(
        PropTypes.exact({
            value: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
        }),
    ).isRequired,
    defaultValue: PropTypes.string.isRequired,
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
            defaultValue,
        },
        ref,
    ) => (
        <ReactSelect
            className={`select ${isInvalid ? 'is-invalid' : ''}`}
            classNamePrefix={isInvalid ? 'select-invalid' : 'select'}
            components={animatedComponents}
            onChange={onChange}
            onBlur={onBlur}
            ref={ref}
            placeholder={placeholder}
            isMulti={isMulti}
            isDisabled={isDisabled}
            closeMenuOnSelect={closeMenuOnSelect}
            isClearable={isClearable}
            isSearchable={isSearchable}
            options={options}
            defaultValue={defaultValue}
        />
    ),
);
Select.propTypes = selectPropTypes;

export default Select;
