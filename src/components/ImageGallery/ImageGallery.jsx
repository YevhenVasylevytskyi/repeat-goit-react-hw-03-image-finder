import { Component } from "react";
import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";
import Loader from "components/Loader/Loader";
// import { RotatingLines } from 'react-loader-spinner';

// import PropTypes from "prop-types";
import s from "./ImageGallery.module.css";

class ImageGallery extends Component{
  BASE_URL = "https://pixabay.com/api/"
  APIKEY = "23839618-ad76d37922a5e5280d987750e";

  state = {
    data: null,
    loading: false
  };  

  componentDidUpdate(prevProps, prevState) {
    const query = this.props.searchQuery;

    if (prevProps.searchQuery !== this.props.searchQuery) {
      this.setState({loading: true})
      fetch(`${this.BASE_URL}?q=${query}&page=1&key=${this.APIKEY}&image_type=photo&orientation=horizontal&per_page=12`).then(res => res.json()).then(data => this.setState({data})).finally(this.setState({loading: true}))
    }
  }

  render() {
    const { data, loading } = this.state;    
    
    return (
      <>
        
        {loading && !data && <Loader />}
        {!data && !loading && <h2 className={s.notQuery}>Введіть пошуковий запит</h2>}
        {data &&
          <ul className={s.ImageGallery}>
            
            {data.hits.map(item => (
              <ImageGalleryItem item={item} key={item.id} />  
            ))} 
            
          </ul>
        }
      </>
    )      
  }
};

ImageGallery.protoType = {
  
};

export default ImageGallery;