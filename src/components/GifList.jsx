import React from "react";

import GifFetch from "./GifFetch";
import Navigation from "./Navigation";
import Form from "./Form";

const GifList = (props, { match }) => {
  let term = props.match.params.term;

  return (
    <div>
      <h1>React Giphy Gallery</h1>
      <Form />
      <Navigation />
      <GifFetch term={term} />
    </div>
  );
};

export default GifList;
