/* eslint-disable no-unused-vars */
import { HiOutlineFire, HiMusicalNote, HiCube, HiChatBubbleOvalLeftEllipsis, HiQrCode, HiOutlinePuzzlePiece, HiGlobeAlt, HiOutlineSparkles } from "react-icons/hi2";
import { IconContext } from "react-icons";
import styles from '../components/MainContainer.module.scss'
import { classnames } from 'tailwindcss-classnames';

import React, {useState, useEffect} from "react";
import Banner from "../../../../assets/nft_collection/metaverse_banner.jpeg";
import SecondMenu  from '../components/SecondMenu'

import ClaimPortal from '../components/ClaimPortal'
import useNewPortal from "../../../Hooks/useNewPortal";

import Countdown from '../components/Countdown'
import Artists from '../Metaverse/Artists'
import Tiktok from '../Metaverse/Tiktok'
import Europe from '../Metaverse/Europe'
import Asia from '../Metaverse/Asia'
import Genres from '../Metaverse/Genres'

function Metaverse() {
  const [claim, setClaim] = useState(false);
  const [color, setColor] = useState('');
  const [canClaim, setCanClaim] = useState(false);
  const principal = localStorage.getItem("principal");

  const {getAllPortals} = useNewPortal();

  useEffect(() => {
    getAllPortals(principal).then((portals) => {
      console.log(portals);
      if(portals.includes(0) || portals.includes(1) || portals.includes(2) || portals.includes(3)) {
        console.log("contains")
        setCanClaim(false);
      }else {
        setCanClaim(true);
      }
    });
  }, [getAllPortals, principal, setCanClaim]);

  console.log(color)
  console.log(canClaim)
  return (
    <div className={classnames(styles.maincontainer)}>
      <div className={classnames(styles.right, 'max-[1100px]:hidden')}>
        <SecondMenu />
      </div>
     
      <div className={classnames(styles.left)}>
        {/* <TopContainer /> */}
        <div className="px-4 ">

        <div className={classnames(styles.cards)}>
          <div className={classnames(styles.filters)}>
            <div className={classnames(styles.popular)}>
              <h2>Feed</h2>
              <a href="/" className={classnames(styles.button2)}>
                Top
              </a>
            </div>
            <div className={classnames(styles.filter_buttons)}>
              <a href="/" className={classnames(styles.button)}>
                All
              </a>
              <a href="/" className={classnames(styles.button2)}>
                Worlds
              </a>
              <a href="/" className={classnames(styles.button2)}>
                E-Sports
              </a>
              <a href="/" className={classnames(styles.button2)}>
                Assets
              </a>
            </div>
          </div>

          <main>  
            {/* <CardMain imgSrc={Card1} title={"Cubic Thunder"} hearts={"65"} />
            <CardMain imgSrc={Card2} title={"Pokemon Ball"} hearts={"65"} /> */}
          </main>
        </div>
      

        <div
          className={classnames(styles.banner)}
          style={{
            background: `url(${Banner})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% auto",
            // backgroundPosition: "90% 50%",
             backgroundPosition: "top center",
         
          }}
        >
          <div className={classnames(styles.textContainer)}>
            <h1>Metaverse</h1>
            <h2 className="-mt-2 mb-6">NFT Assets</h2>
            <p className="mb-4">Stay Tuned for New Updates!</p>
            <div className={classnames(styles.bid)}>
              <a href="/" className={classnames(styles.button)}>
                Enter Now!
              </a>
              {/* <div className="flex flex-col items-center">
                Starting In <span> <Countdown /></span>
              </div> */}
            </div>
          </div>         
        </div>

        <div className={classnames(styles.portfolio__container, '')}>
            <Artists setClaim={setClaim} setColor={setColor} canClaim={canClaim} />
            <Asia setClaim={setClaim} setColor={setColor} canClaim={canClaim} />
            <Tiktok setClaim={setClaim} setColor={setColor} canClaim={canClaim} />
            <Europe setClaim={setClaim} setColor={setColor} canClaim={canClaim} />
            <Genres setClaim={setClaim} setColor={setColor} canClaim={canClaim} />
        </div>
        </div>
      </div>   
      <ClaimPortal claim={claim} setClaim={setClaim} color={color} canClaim={canClaim} /> 
    </div>
  );
}

export default Metaverse;