import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateBadge = () => {
  const [badgeUI, setBadgeUI] = useState(0);
  const [badge, setBadge] = useState({
    id: '',
    name: '',
    description: '',
    imageURL: '',
    creator: ''
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  //add React Hook here for minting

  const displayPrevious = () => setBadgeUI(badgeUI - 1);
  const displayNext = () => setBadgeUI(badgeUI + 1);

  const handleNext = (imageDataURL) => {
    displayNext();
    setBadge({
      ...badge,
      imageURL: imageDataURL,
    });
  };

  return (
    <>
    <div className={` bg-[#00040F] min-h-screen`}>
      <h1 className={` pt-20 text-[#e6e6e6] text-3xl font-bold flex justify-center font-raleway`}>Create Badge</h1>
      // Add changing UI here when minting Badge
      </div>
    </>
  );
};
export default CreateBadge;



