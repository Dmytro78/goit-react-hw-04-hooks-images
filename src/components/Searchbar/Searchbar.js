import React, { useState } from "react";
import PropTypes from "prop-types";

import s from "./Searchbar.module.css";

export default function SearchBar({ onSubmit }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (event) => {
    
    switch (event.target.name) {
      case "searchQuery":
        setSearchQuery(event.target.value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (searchQuery.trim() === "") {
      alert("enter your request");
      return;
    }

    onSubmit(searchQuery);
    
  };

  return (
    <header className={s.Searchbar}>
      <form className={s.SearchForm} onSubmit={handleSubmit}>
        <button type="submit" className={s.SearchFormButton}>
          <span className={s.SearchFormButtonLabel}>Search</span>
        </button>
        <input
          className={s.SearchFormInput}
          type="text"
          autoComplete="off"
          name="searchQuery"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleChange}
          value={searchQuery}
        />
      </form>
    </header>
  );
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};