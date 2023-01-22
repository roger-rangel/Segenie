import React from "react";
import styles from '../components/MainContainer.module.scss'
import { classnames } from 'tailwindcss-classnames';

const GreenPortal = () => {
  return (
    <article key={'create'} className={classnames(styles. portfolio__item)}>
        <div className="relative rounded-full bg-[#ff006e] py-1 px-2 text-center">Coming Soon!</div>
        <div className={classnames(styles. portfolio__item_image)}>
            <img className="rounded-t-lg" src='./img/blueportal.png' alt={'title'} />
        </div>
        <div>
        <h3>N&W2 Portal</h3>
        <h3 className="text-xl text-[#3b82f6]">Blue Portal</h3>
        <h3>Claim on:</h3>
        <div className={classnames(styles. portfolio__item_cta)}>
        <a href="#about" className='py-2 px-4 rounded-lg bg-gradient-to-r from-[#a855f7] to-[#3b82f6] hover:from-[#4ade80] hover:to-[#3b82f6] '>Jan. 24th</a>
        </div>
        </div>
    </article>
  );
}

export default GreenPortal;
