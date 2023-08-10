import { PhotoType } from '@/redux/photos';
import styled from 'styled-components';
import PhotoItem from './PhotoItem';

interface PhotoListProps {
  photos: PhotoType[];
}

export const PhotoList = ({ photos }: PhotoListProps) => {
  return (
    <PhotoListWrap>
      {photos.map((photo, i) => {
        return <PhotoItem key={i} photo={photo} />;
      })}
    </PhotoListWrap>
  );
};

const PhotoListWrap = styled.div`
  margin: 20px auto;
  width: 70%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
`;
