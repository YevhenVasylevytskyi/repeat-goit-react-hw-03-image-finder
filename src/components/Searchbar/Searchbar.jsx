import { Component } from "react";
// import PropTypes from "prop-types";
// import s from "./Searchbar.module.css";

class Searchbar extends Component{
    
  state = {
    
  };  

  render() {
    return (
      <header class="searchbar">
        <form class="form">
            <button type="submit" class="button">
            <span class="button-label">Search</span>
            </button>

            <input
            class="input"
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
            />
        </form>
        </header>
    )
  }
};

Searchbar.protoType = {
  
};

export default Searchbar;