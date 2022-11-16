import PropTypes from 'prop-types';
import AspectRatio from '../AspectRatio/AspectRatio';
import { ReactComponent as CloseIcon } from '../../../../../assets/icons/close-icon.svg';
import { ReactComponent as ImageIcon } from '../../../../../assets/icons/image-icon.svg';
import { useRef } from 'react';

const ImageFileInput = ({ imageDataURL, setImageDataURL }) => {
  const fileInputRef = useRef(null);

  const onClickUploadImageButton = () => {
    const fileInput = fileInputRef.current;
    if (!fileInput) return;

    fileInput.click();
  };

  const onChangeFileInput = async (files) => {
    try {
      if (!files) return;
      const file = files[0];
      if (!file) return;

      const imageDataURL = await readFileAsDataURL(file);
      setImageDataURL(imageDataURL);
    } catch (error) {
      console.error(error);
    }
  };

  const readFileAsDataURL = (file) =>
    new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.addEventListener('load', () => resolve(fileReader.result));
      fileReader.addEventListener('error', reject);
      fileReader.readAsDataURL(file);
    });

  const onClickRemoveButton = () => {
    const fileInput = fileInputRef.current;
    if (!fileInput) return;

    // This resets the file input. Otherwise the file input still holds the last 
    // selected image and will not trigger an onChange event if the same image is selected
    fileInput.value = '';

    setImageDataURL(null);
  };

  return (
    <>
      <AspectRatio ratio="fourByThree">
        {imageDataURL ? (
          <>
            <img className="absolute top-0 left-0 container h-full object-cover" src={imageDataURL} alt="" />
            <button
              //may be a bug here with Tailwind transition properties, unsure about this
              // transition: filter 0.125s ease-in-out;
              // &:hover {
              //   filter: brightness(0.7);
              // }
              className="p-2 bg-[#e6e6e6] rounded-[50%] absolute top-2 right-2 
              border-none cursor-pointer hover:transition-filter brightness-75 duration-150 ease-in-out"
              onClick={onClickRemoveButton}
            >
              <CloseIcon className="block" />
            </button>
          </>
        ) : (
            <button
              //may be a bug here with Tailwind transition properties, unsure about this
              // transition: filter 0.125s ease-in-out;
              // &:hover {
              //   filter: brightness(0.7);
              // }
              className="container h-full rounded-3xl bg-[#fafafa] flex flex-col items-center justify-center 
              border-none cursor-pointer hover:transition-filter brightness-75 duration-150 ease-in-out" 
              onClick={onClickUploadImageButton}
            >
              <ImageIcon className="block" />
              <span className="font-poppins font-semibold text-base bg-clip-text 
              whitespace-nowrap rounded-3xl text-transparent bg-gradient-to-r
               from-purple-500 to-pink-500">
                  Upload image
              </span>
            </button>
        )}
      </AspectRatio>
      <input
        hidden
        ref={fileInputRef}
        type="file"
        accept="image/*"
        capture
        onChange={(event) => onChangeFileInput(event.target.files)}
      />
    </>
  );
};

ImageFileInput.propTypes = {
  imageDataURL: PropTypes.string,
  setImageDataURL: PropTypes.func.isRequired,
};

export default ImageFileInput;
