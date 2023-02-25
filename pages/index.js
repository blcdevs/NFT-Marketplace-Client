import React, { useState, useEffect, useContext } from 'react';

//INTERNAL IMPORT 
import Style from "../styles/index.module.css";

import {AudioLive, BigNFTSilder, Category, Collection, Filter, FollowerTab, HeroSection, NFTCard, Service, Subscribe, Title, Slider, Brand, Video, Loader} from "../components/componentsindex"

// IMPORT CONTRACT DATA
import { NFTMarketplaceContext } from '../Context/NFTMarketplaceContext';

const Home = () => {

  const {checkIfWalletConnected, currentAccount } = useContext(
    NFTMarketplaceContext
    );

    useEffect(() => {
      checkIfWalletConnected();
    }, []);
    

  return (
    <div className={Style.homePage}>
      <HeroSection/>
      <Service/>
      <BigNFTSilder/>

      <Title
        heading="Latest Audio Collection"
        paragraph="Discover the most outstanding Audio NFTs"
      /> 
      <AudioLive/>
      <FollowerTab/>
{/* 
      <Title
        heading="Explore NFT Videos"
        paragraph="Discover the most outstanding Vidoe NFTs"
      />  */}
      <Slider/>

      <Collection/>

      <Title
        heading="Featured NFTs"
        paragraph="Discover the most outstanding NFTs in all topics of life."
      />
      <Filter/>

      <NFTCard/>
      
      <Title
        heading="Browse by category"
        paragraph="Explore the NFTs in the most featured categories."
      />
      <Category/>
       <Subscribe/>
       {/* <Brand/> */}
       <Video/>
    </div>
  )
}

export default Home;