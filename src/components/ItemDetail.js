import { useParams } from "react-router-dom";
import React from 'react'

function ItemDetail() {
  const { id } = useParams();
  return (
    <>
      <h1>Item {id}</h1>
      <p>Description for Item {id}</p>
    </>
  );
}

export default ItemDetail;
