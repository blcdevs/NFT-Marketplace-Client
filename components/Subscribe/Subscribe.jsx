import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import {RiSendPlaneFill} from "react-icons/ri"

//INTERNAL IMPORT
import Style from "./Subscribe.module.css";
import images from "../../public/img";
import Button from "../Button/Button";

const Subscribe = () => {
    return (
      <div className={Style.subscribe}>
        <div className={Style.subscribe_box}>
          <div className={Style.subscribe_box_left}>
            <h2>Never miss a drop</h2>
            <p>
              Subcribe to our super-exclusive drop list and be the first to know
              abour upcoming drops
            </p>
            <div className={Style.subscribe_box_left_box}>
              <span>01</span>
              <small>Get more discount</small>
            </div>
  
            <div className={Style.subscribe_box_left_box}>
              <span>02</span>
              <small>Get premium magazines</small>
            </div>
  
            <div className={Style.subscribe_box_left_input}>
              <input type="email" placeholder="Enter your email" />
              <RiSendPlaneFill className={Style.subscribe_box_left_input_icon} />
            </div>
          </div>
  
          <div className={Style.subscribe_box_right}>
            <Image
              src={images.update}
              alt="get update"
              height={600}
              width={800}
              className={Style.subscribe_box_right_img}
            />
          </div>
        </div>
      </div>
    );
  };
  
  export default Subscribe;