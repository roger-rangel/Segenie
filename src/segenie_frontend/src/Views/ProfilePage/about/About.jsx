import React from 'react'
import styles from './About.module.scss'
import avatar from '../../../../assets/icons/Avatar.svg'
import { classnames } from 'tailwindcss-classnames';
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Creator</h5>
      <h2 className="text-xl">Alexander Milton</h2>

      <div className={classnames(styles.about__container)}>
        <div className={classnames(styles.about__me)}>
          <div className={classnames(styles.about__me_image)}>
            <img src={avatar} alt="avatar" />
          </div>
        </div>

        <div className={classnames(styles.about__content)}>
          <div className={classnames(styles.about__cards)}>
            <article className={classnames(styles.about__card)}>
              <FaAward className={classnames(styles.about__icon)}/>
              <h5>Portals</h5>
              <small>0</small>
            </article>

            <article className={classnames(styles.about__card)}>
              <FiUsers className={classnames(styles.about__icon)}/>
              <h5>Communities</h5>
              <small>10+ Worldwide</small>
            </article>

            <article className={classnames(styles.about__card)}>
              <VscFolderLibrary className={classnames(styles.about__icon)}/>
              <h5>NFTs</h5>
              <small>0</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque eos voluptatem eius dolorem maiores nihil ducimus at rem ullam reprehenderit quidem quia deserunt, molestiae, eligendi amet repellat molestias quos totam.
          </p>

          <div className="flex gap-6 justify-center lg:justify-start ">
            <a href="#contact" className='py-2 px-4 rounded-lg bg-gradient-to-r from-[#a855f7] to-[#3b82f6] hover:from-[#4ade80] hover:to-[#3b82f6]'>Settings</a>
            <a href="#contact" className='py-2 px-4 rounded-lg bg-gradient-to-r from-[#a855f7] to-[#3b82f6] hover:from-[#4ade80] hover:to-[#3b82f6]'>Create</a>
            <a href="#contact" className='py-2 px-4 rounded-lg bg-gradient-to-r from-[#a855f7] to-[#3b82f6] hover:from-[#4ade80] hover:to-[#3b82f6]'>Explore</a>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About