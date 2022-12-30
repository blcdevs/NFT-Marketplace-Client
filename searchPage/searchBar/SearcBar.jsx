import React, { useEffect, useState } from "react";
import { BsSearch, BsArrowRight } from "react-icons/bs";

//INTERNAL IMPORT
import Style from "./SearchBar.module.css";

const SearcBar = () => {
  return (
    <div className={Style.SearchBar}>
    <div className={Style.SearchBar_box}>
      <BsSearch className={Style.SearchBar_box_icon} />
      <input
        type="text"
        placeholder="Enter keyword to search..."
        // onChange={(e) => setSearchItem(e.target.value)}
        // value={searchItem}
      />
      <BsArrowRight className={Style.SearchBar_box_icon} />
    </div>
  </div>
  )
}

export default SearcBar