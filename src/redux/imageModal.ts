import { createSlice, PayloadAction } from '@reduxjs/toolkit';

/** State **/
export interface ImageModalState {
  modalVisible?: boolean;
  bgColor?: { r: number; g: number; b: number };
  src: string;
  alt: string;
}

const initialState: ImageModalState = {
  modalVisible: false,
  bgColor: { r: 0, g: 0, b: 0 },
  src: '',
  alt: '',
};

/** Slice **/
const imageModalSlice = createSlice({
  name: 'imageModal',
  initialState,
  reducers: {
    showModal: (state, action: PayloadAction<ImageModalState>) => {
      state.modalVisible = true;
      state.src = action.payload.src;
      state.alt = action.payload.alt;
      state.bgColor = { r: 0, g: 0, b: 0 };
    },
    hideModal: state => {
      state.modalVisible = false;
    },
    setBgColor: (state, action: PayloadAction<{ r: number; g: number; b: number }>) => {
      state.bgColor = { r: action.payload.r, g: action.payload.g, b: action.payload.b };
    },
  },
});

export const { showModal, hideModal, setBgColor } = imageModalSlice.actions;
export default imageModalSlice.reducer;

/** Selectors **/
export const selectModalVisible = (state: RootState) => state.imageModal.modalVisible;
export const selectModalBgColor = (state: RootState) => state.imageModal.bgColor;
export const selectModalSrc = (state: RootState) => state.imageModal.src;
export const selectModalAlt = (state: RootState) => state.imageModal.alt;

/** RootState **/
interface RootState {
  imageModal: ImageModalState;
}
