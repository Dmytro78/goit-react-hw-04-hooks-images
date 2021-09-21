import { useState } from "react";

import Searchbar from "./components/Searchbar/Searchbar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import "./App.css";

export default function App() {
  const [searchbar, setSearchbar] = useState("");
  
  const onFormSubmit = (searchName) => {
    if (searchName) {
      setSearchbar( searchName);
    }
  };

    return (
      <div className="App">
        <Searchbar submit={onFormSubmit} />
        <ImageGallery searchbar={searchbar} />
      </div>
    );
  }
