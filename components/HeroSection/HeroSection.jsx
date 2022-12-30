import React from 'react';
import Image from "next/image"
//INTERNAL IMPORT
import Style from "./HeroSection.module.css";
import { Button } from "../componentsindex";
import images from "../../public/img";

function HeroSection() {
  return (
    <div className={Style.heroSection}>
        <div className={Style.heroSection_box}>
            <div className={Style.heroSection_box_left}>
                <h1>Discover, collect, and sell NFTs 🖼️</h1>
                <p>
                Discover the most outstanding NTFs in all topics of life. Create and sell NFTs.
                </p>
                <Button btnName="Get Started" handleClick={() => {}}/>
            </div>

            <div className={Style.heroSection_box_right}>
            <Image
            src={images.hero}
            alt="Hero section"
            width={600}
            height={600}
            className={Style.imgHero}
          />
            </div>

        </div>
    </div>
  )
}

export default HeroSection;