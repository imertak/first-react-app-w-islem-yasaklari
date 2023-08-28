import React, { useEffect, useState } from "react";
import "../App.css";

function Home() {

  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % 3);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + 3) % 3);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 2500);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div>
      
      <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        <div className={`carousel-item ${activeIndex === 0 ? 'active' : ''}`}>
          <img
            className="d-block w-100"
            src="https://cdnuploads.aa.com.tr/uploads/Contents/2021/02/08/thumbs_b_c_603875bc3f3334bc495c3c397b3b58d4.jpg"
            alt="First slide"
          />
        </div>
        <div className={`carousel-item ${activeIndex === 1 ? 'active' : ''}`}>
          <img
            className="d-block w-100"
            src="https://cdnuploads.aa.com.tr/uploads/Contents/2023/04/14/thumbs_b_c_17c64c3460860eecdd22644fe05bf152.jpg"
            alt="Second slide"
          />
        </div>
        <div className={`carousel-item ${activeIndex === 2 ? 'active' : ''}`}>
          <img
            className="d-block w-100"
            src="https://www.perpalife.com/wp-content/uploads/2018/11/merkezi-kayit-kurulusu-01.jpg"
            alt="Third slide"
          />
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev" onClick={prevSlide}>
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next" onClick={nextSlide}>
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="sr-only">Next</span>
      </a>
    </div>
    </div>
  );
}

export default Home;
