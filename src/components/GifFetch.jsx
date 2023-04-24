import React, { useState, useEffect } from "react";
import axios from "axios";

import GifContainer from "./GifContainer";

const GifFetch = (props) => {
  const [gifs, setGifs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    doSearch("happy");
  }, []);

  useEffect(() => {
    if (props.term !== searchTerm) {
      doSearch(props.term);
    }
  }, [props.term]);

  const doSearch = (term) => {
    axios
      .get(
        `https://api.giphy.com/v1/gifs/search?q=${term}&limit=24&api_key=dWfTsUntVE86tMnLNvuDauZzuy6qiY4k`
      )
      .then((response) => {
        setGifs(response.data.data);
        setSearchTerm(term);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error fetching and parsing data", error);
      });
  };

  return loading ? (
    <p>Loading Gifs...</p>
  ) : (
    <GifContainer data={gifs} term={searchTerm} />
  );
};

export default GifFetch;
