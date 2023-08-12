import { ReactElement } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { ImageModalState, hideModal } from '../redux/imageModal';
import Modal from './Modal';

function ImageModal({ modalVisible, src, alt, bgColor }: ImageModalState): ReactElement {
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(hideModal());
  };

  return (
    <Modal modalVisible={modalVisible} closeModal={closeModal} bgColor={bgColor}>
      <ImageWrap>
        <FullImage crossOrigin="anonymous" src={src} alt={alt} />
      </ImageWrap>
    </Modal>
  );
}

const ImageWrap = styled.div`
  width: 100%;
  height: 100%;
`;
const FullImage = styled.img`
  max-width: 100vw;
  max-height: 75vh;
  box-shadow: 0px 0px 16px 4px rgba(0, 0, 0, 0.3);
`;

export default ImageModal;
