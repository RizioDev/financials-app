import React from "react";

const VehicleInput = ({
  label,
  name,
  type,
  value,
  placeholder,
  onChange,
  required,
  children, // Para renderizar las opciones en caso de ser un campo de selección
}) => {
  if (type === "select") {
    return (
      <div className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        <label
          htmlFor={name}
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          {label}
        </label>
        <select
          name={name}
          id={name}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          value={value}
          onChange={onChange}
          required={required}
        >
          {children}
        </select>
      </div>
    );
  }

  return (
    <div className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        required={required}
      />
    </div>
  );
};

export default VehicleInput;
