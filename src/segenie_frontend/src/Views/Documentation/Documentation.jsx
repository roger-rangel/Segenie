import React from 'react';
import Page from '../../components/Page/Page';
import Title from '../../components/Title/Title';

const Documentation = () => {
  // const whatIsSegenie = "Segenie is a project built on the Internet Computer. \
  // All of the functionality of Segenie is based around portals.";
  const whatIsSegenie = "Segenie is a project built on the Internet Computer. \
  At the moment Segenie is based around portals but we are looking to add more \
  interesting features in the future.";

  const whatArePortals = "Portals are currently the main component of Segenie. \
  At the moment portals can only be non transferable(similar to Soulbound Tokens). \
  They cannot be bought or traded. The only way to obtain portals is if the portal issuer mints one for you. \
  In the future we are looking to support transferable portals too so that there could be even \
  more possibilites and utilities of the project.";

  const whatArePortalBlueprints = "Before minting portals we need to create our own class of portals \
  This is done by creating a portal blueprint. When creating a portal blueprint we specify some metadata \
  for the portal that we plan to mint in the future. At the moment this metadata consists of name, description, image and minting limit.\
  Once we create a blueprint of a portal we can mint portals that are going to be copies of the blueprint.";

  const whoCanCreateBlueprints = "Anyone can. It is free for anyone to go to the portal blueprint creation page \
  and specify the metadata for your portal. Once you create the portal blueprint you are the issuer of the portal. \
  This means that you can go on and mint portals to anyone you want to.";

  const whatIsAccessRestriction = "Developers can use our npm package to get the portals of a user and based on that \
  make decisions whether the user is allowed to access the website, what features can he use, and whether to load some \
  different content that is according to the portal.";

  const nws2 = "For the N&W S2 we decided to showcase the functionality of Segeni by creating group portals. \
  Depending on the group you are part of you can claim the associated portal for free. We are looking to collaborate \
  with a great project so that we can showcase one of the endless posibilites of the portals. More details will be shared \
  about this once the collaboration is official.";

  return (
    <div className="absolute left-1/2 transform -translate-x-1/2">
        <header className="mt-8 mb-6">
          <Title type="primary">Segenie FAQ</Title>
        </header>
        <div>
          <p className="mt-6 text-left font-raleway text-xl text-[#e6e6e6]">
            What is Segenie?
          </p>
          <p className="mt-3 text-left font-raleway text-base text-[#e6e6e6]">
            {whatIsSegenie}
          </p>
        </div>
        <div>
          <p className="mt-6 text-left font-raleway text-xl text-[#e6e6e6]">
            What are Portals?
          </p>
          <p className="mt-3 text-left font-raleway text-base text-[#e6e6e6]">
            {whatArePortals}
          </p>
        </div>
        <div>
          <p className="mt-6 text-left font-raleway text-xl text-[#e6e6e6]">
            What are Portal Blueprints?
          </p>
          <p className="mt-3 text-left font-raleway text-base text-[#e6e6e6]">
            {whatArePortalBlueprints}
          </p>
        </div>
        <div>
          <p className="mt-6 text-left font-raleway text-xl text-[#e6e6e6]">
            Who can create Portal Blueprints?
          </p>
          <p className="mt-3 text-left font-raleway text-base text-[#e6e6e6]">
            {whoCanCreateBlueprints}
          </p>
          <p className="mt-2 text-left font-raleway text-base text-[#636e99]">
            NOTE: At the moment the UI doesn't support the possibility to provide an image of your portal.
          </p>
        </div>
        <div>
          <p className="mt-6 text-left font-raleway text-xl text-[#e6e6e6]">
            What is the Access Restriction feature?
          </p>
          <p className="mt-3 text-left font-raleway text-base text-[#e6e6e6]">
            {whatIsAccessRestriction}
          </p>
        </div>
        <div>
          <p className="mt-6 text-left font-raleway text-xl text-[#e6e6e6]">
            N&W S2 Group Portals
          </p>
          <p className="mt-3 mb-12 text-left font-raleway text-base text-[#e6e6e6]">
            {nws2}
          </p>
        </div>
    </div>
  );
};
export default Documentation;
