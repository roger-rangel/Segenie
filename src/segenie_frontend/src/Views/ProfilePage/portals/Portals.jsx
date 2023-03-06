/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react'

import styles from './Portals.module.scss'
import { classnames } from 'tailwindcss-classnames';
import useNewPortal from '../../../Hooks/useNewPortal';

import IMG1 from '../../../../assets/icons/buildspace.svg'
import IMG2 from '../../../../assets/icons/icp2.svg'
import IMG3 from '../../../../assets/icons/logo2.svg'

import TransferNFT from '../../Dashboard/components/TransferNFT';

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'N&W2',
    sell: '',
    View: ''
  },
  {
    id: 2,
    image: IMG2,
    title: 'Dfinity Developers',
    sell: '',
    View: ''
  }
]

const Portals = () => {
  let [portals, setPortals] = useState([]);

  const { getAllPortals } = useNewPortal();

  function openModal() {
    console.log("button clicked")
    return true;
  }

  useEffect(() => {  
    if(window.localStorage.getItem("principal")) {
      getAllPortals(window.localStorage.getItem("principal")).then((data) => { 
        console.log(data);
        setPortals(data);
      })
    }
  }, [getAllPortals]);

  return (
    <section id='portals'>
      <h5>Portals</h5>
      <h2>My Portals</h2>

      <div className={classnames(styles. portfolio__container)}>
        {portals !== [] &&
          portals.map((portal) => {
            return (
            <article key={portal.id} className={classnames(styles. portfolio__item)}>
                <div className={classnames(styles. portfolio__item_image)}>
                    <img className="rounded-t-lg" src={IMG2} alt={'title'} />
                </div>
                <div>
                <h3>{portal.name}</h3>
                <h3>{portal.description}</h3>
                <div className={classnames(styles. portfolio__item_cta)}>
                <a href="#about" className='py-2 px-4 rounded-lg bg-gradient-to-r from-[#a855f7] to-[#3b82f6] hover:from-[#4ade80] hover:to-[#3b82f6]'>Transfer</a>
                </div>
              </div>
            </article>
          )})
        }
        {/* <article key={'mock1'} className={classnames(styles. portfolio__item)}>
            <div className="absolute rounded-full bg-[#ff006e] py-1 px-2">Coming Soon!</div>
            <div className={classnames(styles. portfolio__item_image)}>
                <img className="rounded-t-lg" src={IMG1} alt={'title'} />
            </div>
            <div>
            <h3>N&W2</h3>
            <h3>Buildspace</h3>
            <div className={classnames(styles. portfolio__item_cta)}>
            <a href="#about" className='py-2 px-4 rounded-lg bg-gradient-to-r from-[#a855f7] to-[#3b82f6] hover:from-[#4ade80] hover:to-[#3b82f6]'>Jan. 28th</a>
            </div>
          </div>
        </article> */}
        <article key={'mock2'} className={classnames(styles. portfolio__item)}>
            <div className="absolute rounded-full bg-[#ff006e] py-1 px-2">Coming Soon!</div>
            <div className={classnames(styles. portfolio__item_image)}>
                <img className="rounded-t-lg" src={IMG2} alt={'title'} />
            </div>
            <div>
            <h3>Dfinity Developers</h3>
            <h3>Internet Computer</h3>
            <div className={classnames(styles. portfolio__item_cta)}>
            <button onClick={openModal} className='py-2 px-4 rounded-lg bg-gradient-to-r from-[#a855f7] to-[#3b82f6] hover:from-[#4ade80] hover:to-[#3b82f6]'>Transfer</button>
            <TransferNFT transferNFT={openModal} />
            </div>
          </div>
        </article>
        {/* <article key={'mock3'} className={classnames(styles. portfolio__item)}>
            <div className="absolute rounded-full bg-[red] py-1 px-2">Demo</div>
            <div className={classnames(styles. portfolio__item_image)}>
                <img className="rounded-t-lg" src={IMG3} alt={'title'} />
            </div>
            <div>
            <h3>New Portal</h3>
            <h3>Create Your Own</h3>
            <div className={classnames(styles. portfolio__item_cta)}>
            <a href="/portal" className='py-2 px-4 rounded-lg bg-gradient-to-r from-[#a855f7] to-[#3b82f6] hover:from-[#4ade80] hover:to-[#3b82f6]'>Try it out!</a>
            </div>
            </div>
        </article> */}
      </div>
    </section>
  )
}

export default Portals;