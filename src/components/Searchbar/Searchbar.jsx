import { Component } from "react";
// import PropTypes from "prop-types";
import s from "./Searchbar.module.css";
import SearchForm from "components/SearchForm/SearchForm";

class Searchbar extends Component{
    
  state = {
    
  };  

  render() {
    return (
      <header className={s.Searchbar}>
        <SearchForm />
        </header>
    )
  }
};

Searchbar.protoType = {
  
};

export default Searchbar;