import { PhotoType } from '@/redux/photos';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { showModal } from '../redux/imageModal';

interface Props {
  photo: PhotoType;
}

function PhotoItem({ photo: { urls, alt } }: Props) {
  const dispatch = useDispatch();

  const openModal = () => {
    dispatch(showModal({ src: urls.full, alt }));
  };

  return (
    <ImageWrap>
      <Image src={urls.small + '&t=' + new Date().getTime()} alt={alt} onClick={openModal} />
    </ImageWrap>
  );
}

const ImageWrap = styled.div``;

const Image = styled.img`
  cursor: pointer;
  width: 100%;
`;

export default PhotoItem;
