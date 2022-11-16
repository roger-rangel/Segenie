import PropTypes from 'prop-types';
import MintResultCard, {
  mintResultPropTypes,
} from '../MintResultCard/MintResultCard';
import Heading from '../Heading/Heading';
import Description from '../Description/Description';
import { ReactComponent as FacebookIcon } from '../../../../../assets/icons/facebook-icon.svg';
import { ReactComponent as TwitterIcon } from '../../../../../assets/icons/twitter-icon.svg';
import { ReactComponent as InstagramIcon } from '../../../../../assets/icons/instagram-icon.svg';

const MintResultModalBody = ({ mintResult, onClickRemixStudioButton }) => {
  const shareOptions = [
    {
      Icon: FacebookIcon,
      linkURL: 'https://facebook.com',
    },
    {
      Icon: InstagramIcon,
      linkURL: 'https://instagram.com',
    },
    {
      Icon: TwitterIcon,
      linkURL: 'https://twitter.com',
    },
  ];

  return (
    <div className="flex flex-wrap gap-8">
      <div className="flex-[2] min-w-[200px] max-w-[300px] my-0 mx-auto">
        <MintResultCard mintResult={mintResult} />
      </div>
      <div className="flex-1 min-w-[200px] text-left">
        <Heading type="tertiary">What's next?</Heading>
        <Description className="mb-1">
          Show it to the world.
        </Description>
        <div className="flex gap-3">
          {shareOptions.map(({ Icon, linkURL }, index) => (
            //TODO: Translate the code below into Tailwind CSS style
            // .link:not(:disabled) {
            //     cursor: pointer;
            //     transition: filter 0.125s ease-in-out;
              
            //     &:hover {
            //       filter: brightness(0.7);
            //     }
            //   }
            <a key={index} className="&:not(disabled)]:cursos-pointer &:not(disabled)]:transition-filter" href={linkURL}>
              <Icon className="w-[40px] h-[40px]" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

MintResultModalBody.propTypes = {
  mintResult: PropTypes.exact(mintResultPropTypes).isRequired,
  onClickRemixStudioButton: PropTypes.func,
};

export default MintResultModalBody;
