import React from 'react';
import Image from "next/image";

//INTERNAL IMPORT
import Style from "./Notification.module.css";
import images from "../../../public/img";

function Notification() {
  return (
    <div className={Style.notification}>
      <p>Notifications</p>
      <div className={Style.notification_box}>
        <div className={Style.notification_box_img}>
          <Image 
          src={images.user1} 
          width={50} 
          height={50}
          alt="Users Notification"
          className={Style.notification_box_img}
          />
        </div>

        <div className={Style.notification_box_info}>
          <h4>Duvic Web3</h4>
          <p>Your NFT: Flying Angel was liked by Anas</p>
          <small>3 minutes ago</small>
        </div>

        <span className={Style.notification_box_new}></span>

      </div>
    </div>
  )
}

export default Notification