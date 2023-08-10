import { AppDispatch, RootState } from '@/redux/store'; // AppDispatch를 추가
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PhotoList } from '../components/PhotoList';
import { fetchPhotos } from '../redux/photos';

function PhotoListContainer() {
  const dispatch = useDispatch<AppDispatch>(); // AppDispatch를 사용한 dispatch 설정

  useEffect(() => {
    dispatch(fetchPhotos());
  }, [dispatch]);

  const { photos, loading } = useSelector((state: RootState) => ({
    photos:
      state.category.category === 'all'
        ? state.photos.data
        : state.photos.data.filter(photo => photo.category === state.category.category),
    loading: state.photos.loading,
  }));

  if (loading === 'error') {
    return <span>Error!</span>;
  }

  if (loading !== 'done') {
    return <span>loading...</span>;
  }

  return <PhotoList photos={photos} />;
}

export default PhotoListContainer;
