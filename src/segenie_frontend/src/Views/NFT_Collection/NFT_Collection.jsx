/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styles from './NFT_Collection.module.scss'
import { classnames } from 'tailwindcss-classnames';
import NFTs from './NFTs'
// import { useNavigate } from 'react-router-dom';

const NFTCollection = () => {
//   const navigate = useNavigate();
 

  return (
    <>
      <main className="welcome">
        <h1
          className={`pb-6 text-[#e6e6e6] text-3xl font-bold flex justify-center font-raleway`}
        >
          Discover New Worlds with Segenie
        </h1>
        <div className="flex pt-10 space-x-20">
          <div className="flex flex-col ">
            <div className="card">
             <img src="./nft_collection/NFT_1.png" alt="" className="gif2" />
            </div>
            <a
              className="mt-8 text-[#e6e6e6] flex justify-center font-raleway cursor-pointer"
            >
              Enter Collection
            </a>
          </div>

          <div className="flex flex-col ">
            <div className="card_metaverse">
                <img src="./nft_collection/NFT_discover.png" alt="" className="gif2" />
            </div>
            <a
              className="mt-8 text-[#e6e6e6] flex justify-center font-raleway cursor-pointer"
            >
              Explore more NFT Projects
            </a>
          </div>
        </div>
      </main>
      <div className="mx-6">
      <div className={classnames(styles. portfolio__container)}>
      {NFTs &&
        NFTs.map((nft) => (
            <article key={'create'} className={classnames(styles. portfolio__item)}>
                <div className={`relative rounded-full bg-[#a855f7] py-1 px-2 text-center`}>Mint Today</div>
                    <div className={classnames(styles. portfolio__item_image)}>
                        <img className="rounded-t-lg" src={nft.imgSrc} alt={'title'} />
                    </div>
                    <div>
                    <h3>{nft.user_name}</h3>
                    <h3 className={`text-xl text-current text-[#3b82f6]`}>{nft.username}</h3>
                    <h3>Claim on:</h3>
                    <div className={classnames(styles. portfolio__item_cta)}>
                    <a href="#about" className='py-2 px-4 rounded-lg bg-gradient-to-r from-[#a855f7] to-[#3b82f6] hover:from-[#4ade80] hover:to-[#3b82f6] '>Feb. 1th</a>
                    </div>
                </div>
            </article>
        ))}
             <article key={'create'} className={classnames(styles. portfolio__item)}>
                <div className={`relative rounded-full bg-[#4ade80] py-1 px-2 text-center`}>Mint Today</div>
                    <div className={classnames(styles. portfolio__item_image)}>
                        <img className="rounded-t-lg" src='./nft_collection/viking_5.png' alt={'title'} />
                    </div>
                    <div>
                    <h3>Yo-Meon</h3>
                    <h3 className={`text-xl text-current text-[#4ade80]`}>@yomeon</h3>
                    <h3>Claim on:</h3>
                    <div className={classnames(styles. portfolio__item_cta)}>
                    <a href="#about" className='py-2 px-4 rounded-lg bg-gradient-to-r from-[#a855f7] to-[#3b82f6] hover:from-[#4ade80] hover:to-[#3b82f6] '>Feb. 1th</a>
                    </div>
                </div>
            </article>
            <article key={'create'} className={classnames(styles. portfolio__item)}>
                <div className={`relative rounded-full bg-[#f77f00] py-1 px-2 text-center`}>Mint Today</div>
                    <div className={classnames(styles. portfolio__item_image)}>
                        <img className="rounded-t-lg" src='./nft_collection/viking_6.png' alt={'title'} />
                    </div>
                    <div>
                    <h3>Hassan</h3>
                    <h3 className={`text-xl text-current text-[#f77f00]`}>@hassan</h3>
                    <h3>Claim on:</h3>
                    <div className={classnames(styles. portfolio__item_cta)}>
                    <a href="#about" className='py-2 px-4 rounded-lg bg-gradient-to-r from-[#a855f7] to-[#3b82f6] hover:from-[#4ade80] hover:to-[#3b82f6] '>Feb. 1th</a>
                    </div>
                </div>
            </article>
            <article key={'create'} className={classnames(styles. portfolio__item)}>
                <div className={`relative rounded-full bg-[#ff006e] py-1 px-2 text-center`}>Mint Today</div>
                    <div className={classnames(styles. portfolio__item_image)}>
                        <img className="rounded-t-lg" src='./nft_collection/viking_7.png' alt={'title'} />
                    </div>
                    <div>
                    <h3>Amari</h3>
                    <h3 className={`text-xl text-current text-[#ff006e]`}>@amari</h3>
                    <h3>Claim on:</h3>
                    <div className={classnames(styles. portfolio__item_cta)}>
                    <a href="#about" className='py-2 px-4 rounded-lg bg-gradient-to-r from-[#a855f7] to-[#3b82f6] hover:from-[#4ade80] hover:to-[#3b82f6] '>Feb. 1th</a>
                    </div>
                </div>
            </article>
            <article key={'create'} className={classnames(styles. portfolio__item)}>
                <div className={`relative rounded-full bg-[#603813] py-1 px-2 text-center`}>Mint Today</div>
                    <div className={classnames(styles. portfolio__item_image)}>
                        <img className="rounded-t-lg" src='./nft_collection/viking_8.png' alt={'title'} />
                    </div>
                    <div>
                    <h3>Jose</h3>
                    <h3 className={`text-xl text-current text-[#b29f94]`}>@jose</h3>
                    <h3>Claim on:</h3>
                    <div className={classnames(styles. portfolio__item_cta)}>
                    <a href="#about" className='py-2 px-4 rounded-lg bg-gradient-to-r from-[#a855f7] to-[#3b82f6] hover:from-[#4ade80] hover:to-[#3b82f6] '>Feb. 1th</a>
                    </div>
                </div>
            </article>

      </div>
      </div>
    </>
  );
};

export default NFTCollection;