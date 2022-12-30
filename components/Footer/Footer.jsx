import React from 'react';
import Image from "next/image"

import Link from "next/link";
import {TiSocialFacebook, TiSocialLinkedin, TiSocialTwitter, TiSocialYoutube, TiSocialInstagram, TiArrowSortedDown, TiArrowSortedUp} from "react-icons/ti";
import {RiSendPlaneFill} from "react-icons/ri"

//INTERNAL IMPORT
import Style from "./Footer.module.css";
import images from "../../public/img";
import {Discover, Helper} from "../NavBar/index";

const Footer = () => {
  return (
    <div className={Style.footer}>
      <div className={Style.footer_box}>
        <div className={Style.footer_box_social}>
        <Link href={{pathname: '/'}}>
            <Image src={images.avaxlogo} alt="Logo" width={220} height={100} className={Style.footer_box_social_logo}/>
        </Link>
          <p>
          The world’s first and largest digital marketplace for crypto
            collectibles and non-fungible tokens. Buy, sell, and discover
            exclusive digital items.
          </p>

          <div className={Style.footer_social}>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <TiSocialFacebook/>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <TiSocialLinkedin/>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <TiSocialTwitter/>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <TiSocialYoutube/>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <TiSocialInstagram/>
          </a>
          </div>
        </div>

        <div className={Style.footer_box_discover}>
            <h3>Discover</h3>
            <Discover/>
        </div>

        <div className={Style.footer_box_help}>
            <h3>Helper Center</h3>
            <Helper/>
        </div>


        <div className={Style.subscribe}>
        <h3>Subscribe</h3>
        <div className={Style.subscribe_box}>
            <input type="email" placeholder="Enter email to subscribe"/>
            <RiSendPlaneFill className={Style.subscribe_box_send}/>
        </div>

        <div className={Style.subscribe_box_info}>
        <p>
              Discover, collect, and sell extraordinary NFTs OpenSea is the
              world first and largest NFT marketplace
        </p>
        </div>

        </div>   

      </div>
    </div>
  )
}

export default Footer; 