import { useId } from 'react';
import c from './SearchBox.module.css';

const SearchBox = ({ value, handleChange }) => {
  const elementId = useId();
  return (
    <div className={c.container}>
      <label className={c.label} htmlFor={elementId}>
        Find contacts by name
      </label>
      <input
        className={c.searchInput}
        value={value}
        onChange={handleChange}
        type="text"
        id={elementId}
        placeholder="Name"
      />
    </div>
  );
};

export default SearchBox;
