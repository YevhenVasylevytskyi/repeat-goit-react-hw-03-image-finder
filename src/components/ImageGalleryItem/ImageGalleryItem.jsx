import { Component } from "react";
// import PropTypes from "prop-types";
import s from "./ImageGalleryItem.module.css";

class ImageGalleryItem extends Component{
    
  state = {
    
  };  

  render() {
    const item = this.props.item

    return (
      <li
        className={s.ImageGalleryItem}
        // key={item.id}
      >
        <img
          className={s.ImageGalleryItemImage}
          src={item.webformatURL}
          alt={item.tags}
        />        
      </li>
    )
  }
};

ImageGalleryItem.protoType = {
  
};

export default ImageGalleryItem;