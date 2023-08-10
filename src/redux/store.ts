import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from './category';
import imageModalReducer from './imageModal';
import photosReducer from './photos';

export const store = configureStore({
  reducer: {
    category: categoryReducer,
    imageModal: imageModalReducer,
    photos: photosReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
