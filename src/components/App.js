import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemList from "./ItemList";
import ItemDetail from "./ItemDetail";

export default function App(){
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<ItemList />} />
          <Route path="items/:id" element={<ItemDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

