import Button from "./Button/Button";
import Searchbar from "./Searchbar/Searchbar";
import SearchForm from "./SearchForm/SearchForm";
import ImageGallery from "./ImageGallery/ImageGallery";
import { Component } from "react";

export class App extends Component {

  handleFormSubmit = query => {
    console.log(query)
  }

  render() {
    return (
      <>
        <Searchbar>
          <SearchForm
            onSubmit={this.handleFormSubmit}
          />
        </Searchbar>
        <ImageGallery />
        <Button />
      </>
    )
  }
};
