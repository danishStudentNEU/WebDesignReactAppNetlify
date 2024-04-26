import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const requestOne = "https://api.unsplash.com/search/photos?page=2&query=expensive-cars&client_id=h0-MBu3PEhoBpdlmgfmRAoGcG1QcMph-qdjedsUtnx0";
    const requestTwo = "https://api.unsplash.com/search/photos?page=2&query=expensive-cars&client_id=h0-MBu3PEhoBpdlmgfmRAoGcG1QcMph-qdjedsUtnx0";

    const makeRequestToUnsplash = (requestUrl) => {
      fetch(requestUrl)
        .then(res => res.json())
        .then((data) => {
          setImages(prevImages => [...prevImages, ...data.results]);
        });
    }

    makeRequestToUnsplash(requestOne);
    makeRequestToUnsplash(requestTwo);
  }, []);

  return (
    <div className="App">
      <header>
        <h1>Fancy Car Gallery</h1>
      </header>
      <div id="img-box">
        {images.map((imageObj, index) => (
          <div key={index} className="image-container">
            <img
              src={imageObj.urls.regular}
              alt={imageObj.alt_description}
              style={{ margin: "20px", width: "600px", height: "500px", border: "double 4px black" }}
            />
          </div>
        ))}
      </div>
      <footer>
        <p id="footer-text">
          <span style={{ textDecoration: "underline" }}>Designed & Developed by:</span> Danish Khan
        </p>
      </footer>
    </div>
  );
}

export default App;
