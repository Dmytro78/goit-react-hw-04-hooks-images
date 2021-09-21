import { useState } from "react";
import css from './Searchbar.module.css';

export default function Searcbar({ submit }) {
  const [searchbar, setSearchbar] = useState("");

  const formsubmit = (e) => {
    e.preventDefault();
    submit(searchbar);
    reset();
  };

  const inputChange = (e) => {
    const { value } = e.currentTarget;
    setSearchbar(value);
  };

  const reset = () => {
    setSearchbar("");
  };

    return (
      <header className={css.Searchbar}>
        <form onSubmit={formsubmit} className={css.SearchForm}>
          <button type="submit" className={css.SearchFormButton}>
            <span className={css.SearchFormButtonLabel}>Search</span>
          </button>
          <input
            className={css.SearchFormInput}
            type="text"
            name="searchbar"
            value={searchbar}
            onChange={inputChange}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
};