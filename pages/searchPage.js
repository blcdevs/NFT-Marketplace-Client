import React, { useEffect, useState, useContext } from "react";

//INTRNAL IMPORT
import Style from "../styles/searchPage.module.css";
import { Slider, Brand, Loader } from "../components/componentsindex";
import { SearchBar } from "../searchPage/searchBarIndex";
import { Filter } from "../components/componentsindex";

import { NFTCardTwo, Banner } from "../collectionPage/collectionIndex";
import images from "../public/img";

//SMART CONTRACT IMPORT
// import { NFTMarketplaceContext } from "../Context/NFTMarketplaceContext";
const searchPage = () => {

     const collectionArray = [
    images.nft_image_1,
    images.nft_image_2,
    images.nft_image_3,
    images.nft_image_1,
    images.nft_image_2,
    images.nft_image_3,
    images.nft_image_1,
    images.nft_image_2,
  ];

  return (
    <div className={Style.searchPage}>
    <Banner bannerImage={images.creatorbackground2} />
    <SearchBar
    //   onHandleSearch={onHandleSearch}
    //   onClearSearch={onClearSearch}
    />
    <Filter />
    {<NFTCardTwo NFTData={collectionArray} />}
    <Slider />
    <Brand />
  </div>
  )
}

export default searchPage