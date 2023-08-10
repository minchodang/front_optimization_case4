import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import * as photosApi from '../api/photos';
import { RootState } from './store'; // 가정: 스토어 구성이 이루어져 있다고 가정

/** Async Thunks **/
export const fetchPhotos = createAsyncThunk('photos/fetchPhotos', photosApi.fetchPhotos);

/** State **/
export interface PhotoType {
  id: string;
  alt: string;
  urls: {
    small: string;
    full: string;
  };
  category: string;
}

interface PhotosState {
  loading: 'init' | 'pending' | 'done' | 'rejected' | 'error';
  data: PhotoType[];
  error: any; // 에러 타입에 맞게 수정 필요
}

const initialState: PhotosState = {
  loading: 'init',
  data: [],
  error: null,
};

/** Slice **/
const photosSlice = createSlice({
  name: 'photos',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchPhotos.pending, state => {
        state.loading = 'pending';
      })
      .addCase(fetchPhotos.fulfilled, (state, action: PayloadAction<PhotoType[]>) => {
        if (state.loading === 'pending') {
          state.loading = 'done';
          state.data = action.payload;
        }
      })
      .addCase(fetchPhotos.rejected, (state, action: PayloadAction<any>) => {
        if (state.loading === 'pending') {
          state.loading = 'rejected';
          state.error = action.payload;
        }
      });
  },
});

export default photosSlice.reducer;

/** Selectors **/
export const selectPhotos = (state: RootState) => state.photos.data;
export const selectPhotosLoading = (state: RootState) => state.photos.loading;
export const selectPhotosError = (state: RootState) => state.photos.error;
