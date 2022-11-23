
//Main Components
import Button from '../../../../components/Button/Button';
import Separator from '../../../../components/Separator/Separator';

import Description from '../../../NewPortal/PortalModalComponents/Description/Description';
import Link from '../../../NewPortal/PortalModalComponents/Link/Link';

//TODO add Icons as SVG
import { ReactComponent as StickerIcon } from '../../../../../assets/icons/sticker-icon-white.svg';
import  Ball  from '../../../../../assets/gifs/ball.gif';

import React from 'react';

const OptionsModalBody = () => {
  const segenieOptions = [
    {
      name: 'Portal',
      path: '/new-portal', 
      imgSrc: Ball,
      description:
      "Create a portal that can give special access to hidden places inside the Metaverse",
    },
    {
      name: 'Community',
      path: '/',
      imgSrc: Ball,
      description:
        'Create a community around your hidden places in the Metaverse. Ability to include custom perks, rewards and engagement opportunities (chat, challenges, live-streams).',
    },
    {
      name: 'Attach your portal to an NFT',
      path: '/remix-studio',
      imgSrc: Ball,
      description:
        "Empower your digital assets in Web3 through premium access with your new portal",
    },
    {
      name: 'Digital Assets Storage',
      path: '/',
      imgSrc: Ball,
      description:
        'Create an on-chain digital repository for your most valuable digital content, assets, photos, videos. Can be public or private, accessible only to portal-holders',
    },
  ];
 

  return (
    <div className="grid grid-cols-1 gap-y-0 gap-x-8">
      {segenieOptions.map((mintOption, index) => (
        
        <React.Fragment key={index}>
          {index !== 0 && (
            <div className="col-start-1 col-end-3 mt-4 mb-4">
              <Separator />
            </div>
          )} 
          <Link to={mintOption.path} className="flex flex-col">
            <Button
              label={mintOption.name}
              imgSrc={mintOption.imgSrc}
              isDisabled={index !== 0}
            />
          </Link>
          <Description>{mintOption.description}</Description>
        </React.Fragment>
        
      ))}
      
    </div>
  );
};

export default OptionsModalBody;