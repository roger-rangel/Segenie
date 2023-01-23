import React from "react";
import styles from '../components/MainContainer.module.scss'
import { classnames } from 'tailwindcss-classnames';
import useNewPortal from "../../../Hooks/useNewPortal";

const GreenPortal = ({setClaim, setColor, provider}) => {
  const {claimPortal} = useNewPortal();

  const handleClick = async () => {
    if(setColor) {
      setColor('green')
      setClaim(prevClaim => !prevClaim)
    }else {
      console.log("claiming the portal.");
      const res = await claimPortal(provider, 'green');
      alert(res);
    }
  }

  return (
    <article key={'create3'} className={classnames(styles. portfolio__item)}>
        <div className="relative rounded-full bg-[#ff006e] py-1 px-2 text-center">Coming Soon!</div>
        <div className={classnames(styles. portfolio__item_image)}>
            <img className="rounded-t-lg" src='./img/greenportal.png' alt={'title'} />
        </div>
        <div>
        <h3>N&W2 Portal</h3>
        <h3 className="text-xl text-[#4ade80]">Green Portal</h3>
        <h3>Claim on:</h3>
        <div className={classnames(styles. portfolio__item_cta)}>
        <a onClick={() => handleClick()} href="#about" className='py-2 px-4 rounded-lg bg-gradient-to-r from-[#a855f7] to-[#3b82f6] hover:from-[#4ade80] hover:to-[#3b82f6] '>Jan. 24th</a>
        </div>
        </div>
    </article>
  );
}

export default GreenPortal;




