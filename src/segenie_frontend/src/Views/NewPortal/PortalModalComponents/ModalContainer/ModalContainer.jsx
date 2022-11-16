import PropTypes from 'prop-types';
import Container from '../../../../components/Container/Container';

const ModalContainer = ({ children }) => {
  return (
    <main className="h-screen bg-[#18162c] overflow-auto">
      <div className="py-16 px-0 min-h-screen flex flex-col justify-center">
        <Container>{children}</Container>
      </div>
    </main>
  );
};

ModalContainer.propTypes = {
  children: PropTypes.node,
};

export default ModalContainer;