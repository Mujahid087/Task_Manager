import React from 'react';
import clsx from "clsx";
import PropTypes from 'prop-types';

const Textbox = React.forwardRef(({
    type, placeholder, label, className, register, name, error
}, ref) => {
    return (
        <div className='w-full flex flex-col gap-1'>
            {/* Render the label if provided */}
            {label && (
                <label htmlFor={name} className='text-slate-800'>
                    {label}
                </label>
            )}
            <div>
                {/* Input element */}
                <input 
                    type={type} 
                    name={name} 
                    placeholder={placeholder}
                    ref={ref}
                    // {...(register && register(name))}
                    {...register}
                    aria-invalid={error ? "true" : "false"}
                    className={clsx(
                        "bg-transparent px-3 py-2.5 2xl:py-3 border border-gray-300 placeholder-gray-400 text-gray-900 outline-none text-base focus:ring-2 ring-blue-300", 
                        className
                    )}
                />
            </div>
            {/* Error message if error exists */}
            {error && (
                <span className='text-xs text-[#f64949fe] mt-0.5'>
                    {error}
                </span>
            )}
        </div>
    );
});

Textbox.displayName = 'Textbox';
Textbox.propTypes = {
    type: PropTypes.string, // The type of the input (e.g., text, email, password)
    placeholder: PropTypes.string, // Placeholder text for the input
    label: PropTypes.string, // The label text
    className: PropTypes.string, // Additional class names for styling
    register: PropTypes.func, // A function, typically from a form library (e.g., react-hook-form)
    name: PropTypes.string.isRequired, // The name attribute for the input (required)
    error: PropTypes.string // Error message to display
};

Textbox.defaultProps = {
    type: 'text', // Default input type
    placeholder: '', // Default placeholder
    label: '', // Default label
    className: '', // No additional classes by default
    register: null, // Default register is null
    error: '' // Default error is an empty string
};
export default Textbox;


