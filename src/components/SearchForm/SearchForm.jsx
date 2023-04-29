import { Component } from "react";
import { FiSearch } from "react-icons/fi";

// import PropTypes from "prop-types";
import s from "./SearchForm.module.css";

class SearchForm extends Component{
  APIKEY = "23839618-ad76d37922a5e5280d987750e";

  state = {
    query: "",
  };
  
  // componentDidMount() {
  //   fetch(`https://pixabay.com/api/?q=cat&page=1&key=${this.APIKEY}&image_type=photo&orientation=horizontal&per_page=12`).then(res => res.json()).then(console.log)
    
    
  // }

  handleChange = event => {
    this.setState({ query: event.currentTarget.value.toLowerCase() })
    // console.log(this.state.query)
  }

  handleSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state.query)
    }
    
  render() {
      
    
        return (
          <form
            className={s.SearchForm}
            onSubmit={this.handleSubmit}
          >
              <button
                type="submit"
                className={s.SearchFormButton}
              >                    
                <FiSearch className={s.SearchSvg} />                    
              </button>

              <input
                className={s.SearchFormInput}
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"
              value={this.state.query}
              onChange={this.handleChange}
              />
            </form>
    )
  }
};

SearchForm.protoType = {
  
};

export default SearchForm;