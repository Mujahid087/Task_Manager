import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Button = ({ icon, className, label, type, onClick }) => {
    return (
        <button 
            type={type || "button"} 
            onClick={onClick} 
            className={clsx("bx-3 py-2 outline-none",className)}
        >
            <span>{label}</span>
            {icon && icon}
        </button>
    );
};

Button.propTypes = {
    icon: PropTypes.node, // Icon can be any renderable React node
    className: PropTypes.string, // Additional CSS classes
    label: PropTypes.string.isRequired, // Button label is required
    type: PropTypes.string, // Button type (e.g., "button", "submit")
    onClick: PropTypes.func // Click handler function
};

Button.defaultProps = {
    type: 'button', // Default button type
    className: '', // No additional classes by default
    onClick: () => {}, // Default to a no-op function
};

export default Button;

