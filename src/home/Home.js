import React from "react";
import "./Home.css";
import { getRequests } from "../requests";
import Slider from "./Slider";

const Home = () => {
  const requestsNewReleases = getRequests({
    limit: 10,
  });
  const requestsAvengersVSXMen = getRequests({
    limit: 16,
    events: 310,
  });
  const requestsMarvelNow = getRequests({
    limit: 12,
    events: 311,
  });
  const requestsAgeofApocalypse = getRequests({
    limit: 8,
    events: 227,
  });

  return (
    <div className="content-wrapper">
      <div className="slider__wrapper">
        <Slider
          title="NEW RELEASES"
          apiUrl={requestsNewReleases.fetchComics}
          aspectRario="portrait_uncanny"
          isBig
        />
        <Slider
          title="AVENGERS VS X-MEN"
          apiUrl={requestsAvengersVSXMen.fetchComics}
          aspectRario="portrait_uncanny"
        />
        <Slider
          title="MARVEL NOW!"
          apiUrl={requestsMarvelNow.fetchComics}
          aspectRario="standard_fantastic"
        />
        <Slider
          title="AGE OF APOCALYPSE"
          apiUrl={requestsAgeofApocalypse.fetchComics}
          aspectRario="landscape_incredible"
        />
      </div>
    </div>
  );
};

export default Home;
