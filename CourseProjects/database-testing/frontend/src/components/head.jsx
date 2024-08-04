import React from "react";
import { Helmet } from "react-helmet";

function Head({ site }) {
  return (
    <Helmet>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{`SmartShop | ${site}`}</title>
    </Helmet>
  );
}

export default Head;
