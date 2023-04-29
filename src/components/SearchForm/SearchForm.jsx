import { Component } from "react";
import { FiSearch } from "react-icons/fi";
import { ImSearch } from 'react-icons/im';

// import PropTypes from "prop-types";
import s from "./SearchForm.module.css";

class SearchForm extends Component{
    
  state = {
    
    };  
    
    render() {
        return (
            <form className={s.SearchForm}>
                <button type="submit" className={s.SearchFormButton}>
                    {/* <span className={s.SearchFormButtonLabel}> */}
                        <FiSearch className={s.SearchSvg} />
                    {/* </span> */}
                </button>

                <input
                className={s.SearchFormInput}
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"
                />
            </form>
    )
  }
};

SearchForm.protoType = {
  
};

export default SearchForm;