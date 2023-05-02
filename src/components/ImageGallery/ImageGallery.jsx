import { Component } from "react";
import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";
import Loader from "components/Loader/Loader";
import ErrorView from "./ErrorView";
import NoPhotoView from "./NoPhotoView";
import StartView from "./StartView";
import { FetchPhoto } from "../../serviсes/ApiService";

// import PropTypes from "prop-types";
import s from "./ImageGallery.module.css";

class ImageGallery extends Component{

  state = {
    data: null,
    // loading: false,
    error: null,
    status: 'idle'
  };  

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevProps.searchQuery;
    const nextQuery = this.props.searchQuery;

    if (prevQuery !== nextQuery) {
      this.setState({ /*loading: true, data: null,*/ status: 'pending' })
      
      FetchPhoto(nextQuery)
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
                    
        </ul >
      )             
      
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