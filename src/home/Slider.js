import React, { useState, useEffect } from "react";
import "./Slider.css";
import Comic from "./Comic";
import axios from "axios";

const Slider = ({ title, apiUrl, aspectRario, isBig }) => {
  const [comics, setComics] = useState([]);
  const [selectedComic, setSelectedComic] = useState(null);

  useEffect(() => {
    async function makeApiRequest() {
      const request = await axios.get(apiUrl);
      setComics(request.data.data.results);

      return request;
    }
    makeApiRequest();
  }, [apiUrl]);

  const handleComicPosterClick = (comic, e) => {
    comic.id === selectedComic?.id
      ? setSelectedComic(null)
      : setSelectedComic(comic);

    e.target.scrollIntoView({ behavior: "smooth" });
  };

  const selectedComicOutput = selectedComic ? (
    <Comic comic={selectedComic} />
  ) : (
    ""
  );

  return (
    <div className="slider">
      {comics.length > 0 && <div className="slider__title">{title}</div>}
      <div className="slider__comics">
        {comics.map((comic) => (
          <div key={comic.id} className="slider__comic">
            <img
              className={`slider__comic-image ${aspectRario} ${
                isBig && "slider__comic-imageBig"
              }`}
              src={`${comic.images[0].path}/${aspectRario}.${comic.images[0].extension}`}
              alt={comic.title}
              onClick={(e) => {
                handleComicPosterClick(comic, e);
              }}
            />
            <p className="slider__comic-title">{comic.title}</p>
            <p className="slider__comic-actor">
              {comic?.creators?.items
                ?.map((creator) => {
                  return creator.name;
                })
                .join(", ")}
            </p>
          </div>
        ))}
      </div>
      <div
        className={`comic-wrapper ${
          selectedComic && "comic-wrapper--expanded"
        }`}
      >
        {selectedComicOutput}
      </div>
    </div>
  );
};

export default Slider;
