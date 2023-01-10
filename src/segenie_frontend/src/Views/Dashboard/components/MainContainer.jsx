/* eslint-disable no-unused-vars */
import React from "react";
import Banner from "../../../../assets/img/nw2.png";
import Segenie from "../../../../assets/img/seg3.png";

import { HiOutlineFire, HiAcademicCap, HiMusicalNote, HiCube, HiChatBubbleOvalLeftEllipsis, HiQrCode, HiOutlinePuzzlePiece, HiGlobeAlt, HiOutlineSparkles } from "react-icons/hi2";
import { IconContext } from "react-icons";
import Countdown from './Countdown'

import styles from './MainContainer.module.scss'
import { classnames } from 'tailwindcss-classnames';

import TopContainer from "./TopContainer";

function MainContainer() {
  return (
    <div className={classnames(styles.maincontainer)}>
      <div className={classnames(styles.right, 'max-[1100px]:hidden')}>
        <menu className="h-screen bg-[#19162c] flex flex-col items-center shadow-xl sticky top-0">
        
        <div className=" rounded-full bg-[#ff006e] py-1 px-3 mt-4">Demo Mode</div>
        <IconContext.Provider value={{ color: "#f1faee", className: "global-class-name" }}>
          <ul id="mainMenu" className="w-full pt-5 flex flex-col items-left ">
            <div className="flex relative cursor-pointer flex-col">
              <li className="flex list-none mx-2 my-0 relative items-center py-2 rounded-lg hover:bg-[#231942] text-[#f1faee] hover:text-[white]">
                <HiOutlineFire className="ml-4" />
                <h1 className="ml-4">Home</h1>
              </li>
              <li className="flex list-none mx-2 my-0 relative items-center py-2 rounded-lg hover:bg-[#231942]  text-[#f1faee] hover:text-[white]">
                <HiMusicalNote className="ml-4" />
                <h1 className="ml-4">Music</h1>
              </li>
              <li className="flex list-none mx-2 my-0 relative items-center py-2 rounded-lg hover:bg-[#231942]  text-[#f1faee] hover:text-[white]">
                <HiGlobeAlt className="ml-4" />
                <h1 className="ml-4">Metaverse</h1>
              </li>
              <li className="flex list-none mx-2 my-0 relative items-center py-2 rounded-lg hover:bg-[#231942]  text-[#f1faee] hover:text-[white]">
                <HiOutlinePuzzlePiece className="ml-4" />
                <h1 className="ml-4">Education</h1>
              </li>
              <li className="flex list-none mx-2 my-0 relative items-center py-2 rounded-lg hover:bg-[#231942]  text-[#f1faee] hover:text-[white]">
                <HiQrCode className="ml-4" />
                <h1 className="ml-4">Tech & Blockchain</h1>
              </li>
              <li className="flex list-none mx-2 my-0 relative items-center py-2 rounded-lg hover:bg-[#231942]  text-[#f1faee] hover:text-[white]">
                <HiCube className="ml-4" />
                <h1 className="ml-4">New on Web3</h1>
              </li>
              <li className="flex list-none mx-2 my-0 relative items-center py-2 rounded-lg hover:bg-[#231942]  text-[#f1faee] hover:text-[white]">
                <HiAcademicCap className="ml-4" />
                <h1 className="ml-4">Student Hubs</h1>
              </li>
              <li className="flex list-none mx-2 my-0 relative items-center py-2 rounded-lg hover:bg-[#231942]  text-[#f1faee] hover:text-[white]">
                <HiChatBubbleOvalLeftEllipsis className="ml-4" />
                <h1 className="ml-4">ChatGPT</h1>
              </li>
              <li className="flex list-none mx-2 my-0 relative items-center py-2 rounded-lg hover:bg-[#231942]  text-[#f1faee] hover:text-[white]">
                <HiOutlineSparkles className="ml-4" />
                <h1 className="ml-4">Virtual Reality</h1>
              </li>
            </div>
          </ul>
          </IconContext.Provider>
        </menu>
      </div>

     
      <div className={classnames(styles.left)}>
        {/* <TopContainer /> */}
        <div className="px-4 ">
        {/* <div
          className="rounded-lg h-22"
          style={{
            background: `url(${Segenie})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}>
          <h1 className={classnames(styles.segenie)}>Build Your Community</h1>
        </div> */}

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
                Enter on January 17
              </a>
              <div className="flex flex-col items-center">
                Starting In <span> <Countdown /></span>
              </div>
            </div>
          </div>         
        </div>

        <div className={classnames(styles. portfolio__container)}>
            <article key={'create'} className={classnames(styles. portfolio__item)}>
                <div className="relative rounded-full bg-[#ff006e] py-1 px-2 text-center">Coming Soon!</div>
                <div className={classnames(styles. portfolio__item_image)}>
                    <img class="rounded-t-lg" src='./img/blueteam.png' alt={'title'} />
                </div>
                <div>
                <h3>N&W2 Portal</h3>
                <h3 className="text-xl text-[#3b82f6]">Blue Team</h3>
                <h3>Claim on:</h3>
                <div className={classnames(styles. portfolio__item_cta)}>
                <a href="#about" className='py-2 px-4 rounded-lg bg-gradient-to-r from-[#a855f7] to-[#3b82f6] hover:from-[#4ade80] hover:to-[#3b82f6] '>Jan. 17th</a>
                </div>
              </div>
            </article>
            <article key={'create'} className={classnames(styles. portfolio__item)}>
                <div className="relative rounded-full bg-[#ff006e] py-1 px-2 text-center">Coming Soon!</div>
                <div className={classnames(styles. portfolio__item_image)}>
                    <img class="rounded-t-lg" src='./img/yellowteam.png' alt={'title'} />
                </div>
                <div>
                <h3>N&W2 Portal</h3>
                <h3 className="text-xl text-[#f77f00]">Yellow Team</h3>
                <h3>Claim on:</h3>
                <div className={classnames(styles. portfolio__item_cta)}>
                <a href="#about" className='py-2 px-4 rounded-lg bg-gradient-to-r from-[#a855f7] to-[#3b82f6] hover:from-[#4ade80] hover:to-[#3b82f6] '>Jan. 17th</a>
                </div>
              </div>
            </article>
            <article key={'create'} className={classnames(styles. portfolio__item)}>
                <div className="relative rounded-full bg-[#ff006e] py-1 px-2 text-center">Coming Soon!</div>
                <div className={classnames(styles. portfolio__item_image)}>
                    <img class="rounded-t-lg" src='./img/greemteam.png' alt={'title'} />
                </div>
                <div>
                <h3>N&W2 Portal</h3>
                <h3 className="text-xl text-[#4ade80]">Green Team</h3>
                <h3>Claim on:</h3>
                <div className={classnames(styles. portfolio__item_cta)}>
                <a href="#about" className='py-2 px-4 rounded-lg bg-gradient-to-r from-[#a855f7] to-[#3b82f6] hover:from-[#4ade80] hover:to-[#3b82f6] '>Jan. 17th</a>
                </div>
              </div>
            </article>
            <article key={'create'} className={classnames(styles. portfolio__item)}>
                <div className="relative rounded-full bg-[#ff006e] py-1 px-2 text-center">Coming Soon!</div>
                <div className={classnames(styles. portfolio__item_image)}>
                    <img class="rounded-t-lg" src='./img/redteam.png' alt={'title'} />
                </div>
                <div>
                <h3>N&W2 Portal</h3>
                <h3 className="text-xl text-[#d90429]">Red Team</h3>
                <h3>Claim on:</h3>
                <div className={classnames(styles. portfolio__item_cta)}>
                <a href="#about" className='py-2 px-4 rounded-lg bg-gradient-to-r from-[#a855f7] to-[#3b82f6] hover:from-[#4ade80] hover:to-[#3b82f6] '>Jan. 17th</a>
                </div>
              </div>
            </article>
      
          
      </div>

        </div>
      </div>
      
    </div>
  );
}

export default MainContainer;