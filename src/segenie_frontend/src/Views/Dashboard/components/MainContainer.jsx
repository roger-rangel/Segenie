/* eslint-disable no-unused-vars */
import { HiOutlineFire, HiMusicalNote, HiCube, HiChatBubbleOvalLeftEllipsis, HiQrCode, HiOutlinePuzzlePiece, HiGlobeAlt, HiOutlineSparkles } from "react-icons/hi2";
import { IconContext } from "react-icons";
import styles from './MainContainer.module.scss'
import { classnames } from 'tailwindcss-classnames';

import React, {useState, useEffect} from "react";
import Banner from "../../../../assets/img/nw2.png";
import SecondMenu  from './SecondMenu'

import ClaimPortal from './ClaimPortal'
import useNewPortal from "../../../Hooks/useNewPortal";

import Countdown from './Countdown'
import RedPortal from '../Buildspace/RedPortal'
import BluePortal from '../Buildspace/BluePortal'
import GreenPortal from '../Buildspace/GreenPortal'
import YellowPortal from '../Buildspace/YellowPortal'
import PurplePortal from '../Buildspace/PurplePortal'

import RequireWeb3Auth from '../../Web3Authorization/RequireWeb3Auth/RequireWeb3Auth';

const MainContainerWrapper = () => {
  const principal = localStorage.getItem("principal");
  if(principal) {
    return <MainContainer principal={principal}/>
  }else {
    return (
      <RequireWeb3Auth>
        <MainContainer principal={localStorage.getItem("principal")}/>
      </RequireWeb3Auth>
    )
  }
}

function MainContainer({principal}) {
  const [claim, setClaim] = useState(false);
  const [color, setColor] = useState('');
  const [canClaim, setCanClaim] = useState(true);

  const {getAllPortals} = useNewPortal();

  useEffect(() => { 
    getAllPortals(principal).then((portals) => {
      console.log(portals);
      if(portals.includes(8) || portals.includes(9) || portals.includes(10) || portals.includes(11) || portals.includes(12)) {
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

        <div className={classnames(styles. portfolio__container)}>
            <BluePortal setClaim={setClaim} setColor={setColor} canClaim={canClaim} />
            <YellowPortal setClaim={setClaim} setColor={setColor} canClaim={canClaim} />
            <GreenPortal setClaim={setClaim} setColor={setColor} canClaim={canClaim} />
            <RedPortal setClaim={setClaim} setColor={setColor} canClaim={canClaim} />
            <PurplePortal setClaim={setClaim} setColor={setColor} canClaim={canClaim} />
        </div>
        </div>
      </div>   
      <ClaimPortal claim={claim} setClaim={setClaim} color={color} canClaim={canClaim} /> 
    </div>
  );
}

export default MainContainerWrapper;