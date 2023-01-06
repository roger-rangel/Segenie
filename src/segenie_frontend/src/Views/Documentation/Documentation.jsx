import React from 'react';
import Page from '../../components/Page/Page';
import Title from '../../components/Title/Title';

const Documentation = () => {
  const whatIsSegenie = "Segenie is a project built on the Internet Computer. \
  All of the functionality of Segenie is based around portals.";

  const whatArePortals = "Portals are the main component of Segenie. In essence they are Soulbound Tokens(SBTs). \
  They cannot be bought or traded. The only way to obtain portals is if the portal issuer mints one for you."

  const whoCanCreatePortals = "Anyone can. To create a portal you have to specify all the metadata of your portal.";

  const whatIsAccessRestriction = "Developers can use our npm package to get the portals of a user and based on that \
  decide the kind of access they have to the website, or totally restrict them from the website.";

  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <Page>
        <header className="mt-12 mb-6">
          <Title type="primary">Segenie FAQ</Title>
        </header>
        <div>
          <p className="ml-6 mt-6 text-left font-raleway text-xl text-[#e6e6e6]">
            What is Segenie?
          </p>
          <p className="ml-6 mt-3 text-left font-raleway text-base text-[#e6e6e6]">
            {whatIsSegenie}
          </p>
        </div>
        <div>
          <p className="ml-6 mt-6 text-left font-raleway text-xl text-[#e6e6e6]">
            What are Portals?
          </p>
          <p className="ml-6 mt-3 text-left font-raleway text-base text-[#e6e6e6]">
            {whatArePortals}
          </p>
        </div>
        <div>
          <p className="ml-6 mt-6 text-left font-raleway text-xl text-[#e6e6e6]">
            Who can create Portals?
          </p>
          <p className="ml-6 mt-3 text-left font-raleway text-base text-[#e6e6e6]">
            {whoCanCreatePortals}
          </p>
        </div>
        <div>
          <p className="ml-6 mt-6 text-left font-raleway text-xl text-[#e6e6e6]">
            What is the Access Restriction feature?
          </p>
          <p className="ml-6 mt-3 text-left font-raleway text-base text-[#e6e6e6]">
            {whatIsAccessRestriction}
          </p>
        </div>
      </Page>
    </div>
  );
};
export default Documentation;
