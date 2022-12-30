import React, {useState} from 'react';
import Image from "next/image";
import Link from "next/link";
import {GrClose} from "react-icons/gr";
import {TiSocialFacebook, TiSocialLinkedin, TiSocialTwitter, TiSocialYoutube, TiSocialInstagram, TiArrowSortedDown, TiArrowSortedUp} from "react-icons/ti";

//INTERNAL IMPORTS
import Style from "./SideBar.module.css";
import images from "../../../public/img";
import Button from "../../Button/Button";

function SideBar({setOpenSideMenu}) {

  // USESTATE
const [openDiscover, setOpenDiscover] = useState(false);
const [openHelp, setOpenHelp] = useState(false);

const discover = [
  {
    name: "Collections",
    link: "collection"
  },
  {
    name: "Search",
    link: "searchPage",
  },
  {
    name: "Author Profile",
    link: "author-profile"
  },
  {
    name: "NFT Details",
    link: "NFT-details"
  },
  {
    name: "Account Setting",
    link: "account-setting"
  },
  {
    name: "Upload NFT",
    link: "upload-nft"
  },
  {
    name: "Connect Wallet",
    link: "connect-wallet"
  },
  {
    name: "Blog",
    link: "blog" 
  }
]


const helpCenter = [
  {
    name: "About",
    link: "about-us"
  },
  {
    name: "Contact Us",
    link: "contact-us"
  },
  {
    name: "Sign Up",
    link: "sign-up"
  },
  {
    name: "Sign In",
    link: "sign-in"
  },
  {
    name: "Subscription",
    link: "subscription"
  },
];

  const openDiscoverMenu = () =>{
    if(!openDiscover){
      setOpenDiscover(true);
    }else{
      setOpenDiscover(false);
    }
  }

  const openHelpMenu = () =>{
    if(!openHelp){
      setOpenHelp(true);
    }else{
      setOpenHelp(false);
    }
  }

  const closeSideBar = () =>{
    setOpenSideMenu(false);
  }


  return (
    <div className={Style.sideBar}>
      <GrClose className={Style.sideBar_closeBtn} onClick={() =>closeSideBar()}/>

      <div className={Style.sideBar_box}>
        <Image src={images.avaxlogo} alt="Logo" width={150} height={100}/>
        <p>Discover the most outstanding articles on blockchain including NFTs</p>
        <div className={Style.sideBar_social}>
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

      <div className={Style.sideBar_menu}>
        <div>
          <div className={Style.sideBar_menu_box} onClick={()=>openDiscoverMenu()}>
            <p>Discover</p>
            <TiArrowSortedDown/>
          </div>
          {
            openDiscover && (
              <div className={Style.sideBar_discover}>
                {discover.map((el, i) => (
                  <p key={i + 1}>
                    <Link href={{pathname: `${el.link}`}}>{el.name}</Link>
                  </p>
                ))}
              </div>
            )
          }
        </div>

        <div>
          <div className={Style.sideBar_menu_box} onClick={() => openHelpMenu()}>
            <p>Help Center</p>
            <TiArrowSortedDown/>
          </div>

          {
            openHelp && (
              <div className={Style.sideBar_discover}>
                {
                helpCenter.map((el, i) => (
                  <p key={i + 1}>
                    <Link href={{pathname: `${el.link}`}}>{el.name}</Link>
                  </p>
                ))}
              </div>
            )
          }
        </div>
      </div>

      <div className={Style.sideBar_button}>
          <Button btnName="Create" handleClick={() =>{}}/>
          <Button btnName="Connect Wallet" handleClick={() =>{}}/>
      </div>

    </div>
    
  )
}

export default SideBar