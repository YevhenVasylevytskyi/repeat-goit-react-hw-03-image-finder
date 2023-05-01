import { Component } from "react";
import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";
import Loader from "components/Loader/Loader";
import ErrorView from "./ErrorView";
import NoPhotoView from "./NoPhotoView";
import StartView from "./StartView";


// import PropTypes from "prop-types";
import s from "./ImageGallery.module.css";

class ImageGallery extends Component{
  BASE_URL = "https://pixabay.com/api/"
  APIKEY = "23839618-ad76d37922a5e5280d987750e";

  state = {
    data: null,
    // loading: false,
    error: null,
    status: 'idle'
  };  

  componentDidUpdate(prevProps, prevState) {
    const {searchQuery} = this.props;

    if (prevProps.searchQuery !== this.props.searchQuery) {
      this.setState({ /*loading: true, data: null,*/ status: 'pending' })
      
      fetch(`${this.BASE_URL}?q=${searchQuery}&page=1&key=${this.APIKEY}&image_type=photo&orientation=horizontal&per_page=12`)
        .then(response => {
          if (response.ok) {
            return response.json()
          }

          Promise.reject(new Error(`Фото ${searchQuery} не знайдено`))
        })
        .then(data => this.setState({ data, status: 'resolved' }))
        .catch(error => this.setState({ error, status: 'rejected' }))
        // .finally(this.setState({ loading: true }))
    }
  }

  render() {
    const {
      data,
      // loading,
      error,
      status
    } = this.state;

    const {searchQuery} = this.props;
    
    if (status === 'idle') { 
      return  <StartView />
    }

    if (status === 'pending') {
      return <Loader />
    }

    if (status === 'rejected') {
      return <ErrorView message={ error.message } />
    }

    if (status === 'resolved') {
      
      if (data.hits.length === 0) {
        return <NoPhotoView searchQuery={ searchQuery } />
        }
            
      return (
        <ul className={s.ImageGallery} >
            
          {data.hits.map(item => (
            <ImageGalleryItem item={item} key={item.id} />
          ))} 
                    
        </ul >)             
      
    }


    // return (
    //   <>
    //     {error && <p className={s.notQuery}>{error.message}</p>}
    //     {loading && !data && !error && <Loader />}
    //     {!data && !loading && <p className={s.notQuery}>Введіть пошуковий запит</p>}
    //     {data &&
    //       <ul className={s.ImageGallery}>
            
    //         {data.hits.map(item => (
    //           <ImageGalleryItem item={item} key={item.id} />  
    //         ))} 
            
    //       </ul>
    //     }
    //   </>
    // )      
  }
};

ImageGallery.protoType = {
  
};

export default ImageGallery;