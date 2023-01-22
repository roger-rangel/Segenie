/* eslint-disable no-unused-vars */
import { HiOutlineFire, HiMusicalNote, HiCube, HiChatBubbleOvalLeftEllipsis, HiQrCode, HiOutlinePuzzlePiece, HiGlobeAlt, HiOutlineSparkles } from "react-icons/hi2";
import { IconContext } from "react-icons";
import styles from './MainContainer.module.scss'
import { classnames } from 'tailwindcss-classnames';

import React from "react";
import Banner from "../../../../assets/img/nw2.png";
import SecondMenu  from '../components/SecondMenu'

import Countdown from './Countdown'
import RedPortal from '../Buildspace/RedPortal'
import BluePortal from '../Buildspace/BluePortal'
import GreenPortal from '../Buildspace/GreenPortal'
import YellowPortal from '../Buildspace/YellowPortal'
import PurplePortal from '../Buildspace/PurplePortal'

function MainContainer() {
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
                Popular
              </a>
            </div>
            <div className={classnames(styles.filter_buttons)}>
              <a href="/" className={classnames(styles.button)}>
                All
              </a>
              <a href="/" className={classnames(styles.button2)}>
                Illustration
              </a>
              <a href="/" className={classnames(styles.button2)}>
                Art
              </a>
              <a href="/" className={classnames(styles.button2)}>
                Games
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
            backgroundSize: "100% 100%",
            backgroundPosition: "center",
          }}
        >
          <div className={classnames(styles.textContainer)}>
            <h1>N&W S2</h1>
            <h2 className="-mt-2 mb-6">Buildspace</h2>
            <p>Stay Tuned for New Updates!</p>
            <div className={classnames(styles.bid)}>
              <a href="/" className={classnames(styles.button)}>
                Enter on January 24
              </a>
              <div className="flex flex-col items-center">
                Starting In <span> <Countdown /></span>
              </div>
            </div>
          </div>         
        </div>

        <div className={classnames(styles. portfolio__container)}>
            <BluePortal />
            <YellowPortal />
            <GreenPortal />
            <RedPortal />
        </div>
        </div>
      </div>    
    </div>
  );
}

export default MainContainer;