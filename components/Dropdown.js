import React from 'react';
import styles from '../styles/Dropdown.module.css';


const Dropdown = ({ options, onChange }) => {
  return (
    <div className={styles.dropdowncontainer}>
      <label htmlFor="dropdown" className={styles.label}>
        
      </label>
      <select id="dropdown" className={styles.dropdown} onChange={(e) => onChange(e.target.value)}>
        <option value="">Choose an option</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
