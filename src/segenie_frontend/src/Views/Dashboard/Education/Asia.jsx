import React from "react";
import styles from '../components/MainContainer.module.scss'
import { classnames } from 'tailwindcss-classnames';
import useNewPortal from "../../../Hooks/useNewPortal";

const Asia = ({setClaim, setColor, provider, canClaim}) => {
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
       <div className="relative rounded-full bg-[#3b82f6] py-1 px-2 text-center">New</div>
        <div className={classnames(styles. portfolio__item_image2)}>
              <img className="rounded-t-lg" src='./nft_collection/architecture.png' alt={'title'} />
          </div>
          <div>
          <h3 className="pt-3">Bachelors</h3>
          <h3 className="text-xl text-[#3b82f6]">Architecture</h3>
          <h3>32</h3>
          <div className={classnames(styles. portfolio__item_cta)}>
            <a  href="#about" className='py-2 px-4 rounded-lg bg-gradient-to-r from-[#a855f7] to-[#3b82f6] hover:from-[#4ade80] hover:to-[#3b82f6] '>Explore</a>
        </div>
      </div>
    </article>
  );
}

export default Asia;