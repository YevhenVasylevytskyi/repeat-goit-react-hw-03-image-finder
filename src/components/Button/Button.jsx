import { Component } from "react";
// import PropTypes from "prop-types";
import s from "./Button.module.css";

class Button extends Component{
    
  state = {
    
  };  

  render() {
    return (
        <button className={s.Button} type="button">
            Load more
        </button>
    )
  }
};

Button.protoType = {
  
};

export default Button;