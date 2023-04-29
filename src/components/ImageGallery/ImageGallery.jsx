import { Component } from "react";
import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";
// import PropTypes from "prop-types";
// import s from "./ImageGallery.module.css";

class ImageGallery extends Component{
    
  state = {
    
  };  

  render() {
    return (
        <ul className="gallery">
          <ImageGalleryItem />
        </ul>
    )
  }
};

ImageGallery.protoType = {
  
};

export default ImageGallery;