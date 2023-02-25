import React, {useState, useEffect, useContext} from 'react';
import Image from "next/image";
import Link from "next/link";

//ICONS IMPORT 
import {MdNotifications} from "react-icons/md";
import {BsSearch} from "react-icons/bs";
import {CgMenuLeft, CgMenuRight} from "react-icons/cg";

//INTERNAL IMPORT
import Style from "./NavBar.module.css";
import {Discover, Helper, Notification, Profile, SideBar} from "./index";
import { Button } from "../componentsindex";
import images from "../../public/img";


//IMPORT FROM SMART CONTRACT
import {NFTMarketplaceContext} from "../../Context/NFTMarketplaceContext"


function NavBar() {
  //USE STATE
  const [discover, setDiscover] = useState(false);
  const [helper, setHelper] = useState(false);
  const [notification, setNotification] = useState(false);
  const [profile, setProfile] = useState(false);
  const [openSideMenu, setOpenSideMenu] = useState(false);


  const openMenu = (e)=>{
    const btnText = e.target.innerText;
      if(btnText == "Discover"){
        setDiscover(true);
        setHelper(false);
        setNotification(false);
        setProfile(false);
      }else if(btnText == "Help Center"){
        setDiscover(false);
        setHelper(true);
        setNotification(false);
        setProfile(false);
      }else{
        setDiscover(false);
        setHelper(false);
        setNotification(false);
        setProfile(false);
      }
  
  }

  const openNotification = ()=>{
    if(!notification){
      setNotification(true);
      setDiscover(false);
      setHelper(false);
      setProfile(false);
    }else{
      setNotification(false);
    }
  };

  const openProfile = ()=>{
    if(!profile){
      setProfile(true);
      setHelper(false);
      setDiscover(false);
      setNotification(false);
    }else{
      setProfile(false);
    }
  }

  const openSideBar = () => {
    if (!openSideMenu) {
      setOpenSideMenu(true);
    } else {
      setOpenSideMenu(false);
    }
  };

  const {currentAccount, connectWallet} = useContext(NFTMarketplaceContext);


  return (
    <div className={Style.navbar}>
      <div className={Style.navbar_container}>
        <div className={Style.navbar_container_left}>
          <div className={Style.logo}>
            <Link href={{pathname: '/'}}>
            <Image src={images.avaxlogo} alt="Logo" width={150} height={70}/>
            </Link>
          </div>

          <div className={Style.navbar_container_left_box_input}>
              <div className={Style.navbar_container_left_box_input_box}>
                  <input type="text" placeholder='Search Assets' />
                  < BsSearch onClick={() =>{}} className={Style.search_icon}/>
              </div>
          </div>
        </div>

        {/* END OF LEFT SECTION */}

        <div className={Style.navbar_container_right}>

              {/* DISCOVER MENU */}
              <div className={Style.navbar_container_right_discover}>
            <p onClick={(e) => openMenu(e)}>Discover</p>
            {discover && (
              <div className={Style.navbar_container_right_discover_box}>
                <Discover />
              </div>
            )}
          </div>

            {/* HELP CENTER */}
            <div className={Style.navbar_container_right_help}>
                <p onClick={(e) =>{openMenu(e)}}>Help Center</p>
                {helper && (
                  <div className={Style.navbar_container_right_help_box}>
                  <Helper />
              </div>
                )}
            </div>
            {/*END HELP CENTER */}

              {/* Notification*/}
              <div className={Style.navbar_container_right_notify}>
                <MdNotifications className={Style.notify} onClick={() =>openNotification()}/>
                {notification && <Notification/>}
            </div>
            {/*END Notification*/}

              {/* CREATE BUTTON*/}
              <div className={Style.navbar_container_right_button}>
                {currentAccount == "" ? (
                  <Button btnName="Connect Wallet" handleClick={() => connectWallet()}/> 
                )
                : (
                  <Link href={{pathname: "/upload-nft"}}>
                    <Button btnName="Create" handleClick={() => {}}/>
                  </Link>  
                )
                                  
                }
            </div>
            {/*END CREATE BUTTON*/}

             {/* CREATE USER*/}
             <div className={Style.navbar_container_right_profile_box}>
               <div className={Style.navbar_container_right_profile}>
               <Image
                src={images.user1}
                alt="Profile"
                width={40}
                height={40}
                onClick={() => openProfile()}
                className={Style.navbar_container_right_profile}
              />

              {profile && <Profile/>}
               </div>
            </div>
            {/*END CREATE USER*/}


            {/* MOBILE MENU BUTOON */}
            <div className={Style.navbar_container_right_menuBtn}>
                  <CgMenuRight className={Style.menuIcon}
                  onClick={() => openSideBar()} 
                  />
            </div>
          {/*MOBILE END MENU BUTOON */}

        </div>
      </div>

      {/* RENDER SIDEBAR MENU ON THE MOBILE DEVICE */}

      {
        openSideMenu && (
          <div className={Style.sideBar}>
              <SideBar setOpenSideMenu={setOpenSideMenu}
                currentAccount ={currentAccount}
                connectWallet ={connectWallet}
              />
          </div>
        )
      }


    </div>
  )
}

export default NavBar;