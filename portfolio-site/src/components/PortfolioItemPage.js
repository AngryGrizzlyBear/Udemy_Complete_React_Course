import React from 'react';

const PortfolioItemPage = (props) => (
  <div>
      <h1>A thing I've done</h1>
      <p>This page is for the item with the id of {props.match.params.id}</p>
  </div>
);


export default PortfolioItemPage;