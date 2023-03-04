import React from 'react'
import styles from './Stats.module.scss'
import {BsPatchCheckFill} from 'react-icons/bs'
import { classnames } from 'tailwindcss-classnames';

const Portals = () => {
  return (
    <section id='portals'>
      <h5>Portals</h5>
      <h2 className="text-xl">My Portals</h2>
      
      <div className={classnames(styles.experience__container)}>
        <div className={classnames(styles.experience__frontend)}>
          <h3>Top</h3>
          <div  className={classnames(styles.experience__content)}>
            <article  className={classnames(styles.experience__details)}>
              <BsPatchCheckFill  className={classnames(styles.experience__details_icon)} />
              <div>
                <h4>Nights and Weekends S2</h4>
                <small className='text-light'>Buildspace</small>
              </div>
            </article>
          </div>
        </div>
        {/* END OF FRONTEND */}

        <div className={classnames(styles.experience__backend)}>
        <h3>All</h3>
          <div className={classnames(styles.experience__content)}>
            <article className={classnames(styles.experience__details)}>
              <BsPatchCheckFill className={classnames(styles.experience__details_icon)}/>
              <div>
                <h4>Nights and Weekends S2</h4>
                <small className='text-light'>Buildspace</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portals;