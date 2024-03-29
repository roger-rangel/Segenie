import React from "react";
import styles from '../components/MainContainer.module.scss'
import { classnames } from 'tailwindcss-classnames';
import useNewPortal from "../../../Hooks/useNewPortal";

const BluePortal = ({setClaim, setColor, provider, canClaim}) => {
  const {claimPortal} = useNewPortal();

  const handleClick = async () => {
    if(setColor) {
      setColor('blue')
      setClaim(prevClaim => !prevClaim)
    }else {
      console.log("claiming the portal.");
      const res = await claimPortal(provider, 'blue');
      alert(res);
    }
  }

  return (
    <article key={'create'} className={classnames(styles. portfolio__item)}>
       <div className="relative rounded-full bg-[#3b82f6] py-1 px-2 text-center">Blue Team</div>
        <div className={classnames(styles. portfolio__item_image)}>
              <img className="rounded-t-lg" src='./img/blueportal.png' alt={'title'} />
          </div>
          <div>
          <h3>N&W2 Portal</h3>
          <h3 className="text-xl text-[#3b82f6]">Blue Portal</h3>
          <h3>Claim on:</h3>
          <div className={classnames(styles. portfolio__item_cta)}>
          {canClaim &&
            <a onClick={() => handleClick()}  href="#about" className='py-2 px-4 rounded-lg bg-gradient-to-r from-[#a855f7] to-[#3b82f6] hover:from-[#4ade80] hover:to-[#3b82f6] '>Claim Now</a>
          }
          {!canClaim &&
            <a href="#about" className='py-2 px-4 rounded-lg bg-gradient-to-r from-[#a855f7] to-[#3b82f6] hover:from-[#4ade80] hover:to-[#3b82f6] '>Claimed!</a>
          }
        </div>
      </div>
    </article>
  );
}

export default BluePortal;
