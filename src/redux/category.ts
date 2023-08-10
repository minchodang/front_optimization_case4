import { createSlice, PayloadAction } from '@reduxjs/toolkit';

/** State **/
interface CategoryState {
  category: string; // 'all', 'random', 'animals', 'food', 'fashion', 'travel'
}

const initialState: CategoryState = {
  category: 'all',
};

/** Slice **/
const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    },
  },
});

export const { setCategory } = categorySlice.actions;
export default categorySlice.reducer;

/** Selectors **/
export const selectCategory = (state: RootState) => state.category.category;

/** RootState **/
interface RootState {
  category: CategoryState;
}
