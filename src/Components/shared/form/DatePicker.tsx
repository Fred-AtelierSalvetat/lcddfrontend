import React, { FC, createElement, forwardRef } from 'react';
import type { HTMLProps, Ref } from 'react';

import { default as ReactDatePicker, registerLocale } from 'react-datepicker';
import { fr, enUS } from 'date-fns/locale';
import { ReactComponent as CalendarIcon } from '~/assets/icons/date_range_24px.svg';

import PropTypes from 'prop-types';

import 'react-datepicker/dist/react-datepicker.css';
import './DatePicker.scss';

registerLocale('fr', fr);
registerLocale('enUS', enUS);

const datePickerPropsTypes = {
    placeholder: PropTypes.string.isRequired,
    dateFormat: PropTypes.string.isRequired,
    isInvalid: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
    onBlur: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    ref: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({ current: PropTypes.instanceOf(HTMLInputElement) })])
        .isRequired,
};

const DatePicker: FC<PropTypes.InferProps<typeof datePickerPropsTypes>> = ({
    placeholder,
    dateFormat,
    isInvalid,
    onChange,
    onBlur,
    value,
    ref,
}) => {
    const DatePickerCustomInput = (props: HTMLProps<HTMLInputElement>, ref: Ref<HTMLInputElement>) => (
        <div className={`datepicker-custom-input-container ${props.className}`}>
            <input
                {...props}
                ref={ref}
                className={`form-control  ${props.className}`}
                id="datepicker-custom-input"
                type="text"
            />
            <CalendarIcon />
        </div>
    );

    return (
        <ReactDatePicker
            onChange={onChange}
            onBlur={onBlur}
            ref={ref}
            wrapperClassName={`form-control ${isInvalid ? 'is-invalid' : ''}`}
            className={`${isInvalid ? 'is-invalid' : ''}`}
            selected={value}
            locale="fr"
            showTimeSelect
            timeCaption="Heure"
            popperPlacement="left-start"
            placeholderText={placeholder}
            dateFormat={dateFormat}
            filterDate={(d) => {
                return new Date() < d;
            }}
            customInput={createElement(forwardRef(DatePickerCustomInput))}
        />
    );
};

DatePicker.propTypes = datePickerPropsTypes;

export default DatePicker;
