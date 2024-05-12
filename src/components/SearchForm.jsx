import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './SearchForm.css';

function SearchForm({ onSubmit }) {
  const [keyword, setKeyword] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(keyword.trim());
  };

  return (
    <div className="input-div">
      <form onSubmit={handleSubmit}>
        <input
          className="searched-movies-input"
          type="text"
          value={keyword}
          onChange={e => setKeyword(e.target.value)}
          placeholder="Enter search keyword"
        />
        <button className="searched-movies-button" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
