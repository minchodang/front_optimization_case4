import { PhotoType } from '@/redux/photos';
import LazyLoad from 'react-lazyload';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { setBgColor, showModal } from '../redux/imageModal';
import { getAverageColorOfImage } from '../utils/getAverageColorOfImage';

interface Props {
  photo: PhotoType;
}

function PhotoItem({ photo: { urls, alt } }: Props) {
  const dispatch = useDispatch();

  const openModal = (e: React.MouseEvent<HTMLImageElement>) => {
    dispatch(showModal({ src: urls.full, alt }));
    const averageColor = getAverageColorOfImage(e.target as HTMLImageElement); // Optional
    dispatch(setBgColor(averageColor));
  };

  return (
    <ImageWrap>
      <LazyLoad offset={1000}>
        <Image
          crossOrigin="anonymous"
          src={urls.small + '&t=' + new Date().getTime()}
          alt={alt}
          onClick={openModal}
        />
      </LazyLoad>
    </ImageWrap>
  );
}

const ImageWrap = styled.div`
  width: 100%;
  padding-bottom: 56.25%;
  position: relative;
`;

const Image = styled.img`
  cursor: pointer;
  width: 100%;
  position: absolute;
  height: 100%;
  top: 0;
  left: 0;
`;

export default PhotoItem;
