import { createSlice } from "@reduxjs/toolkit";

export const imageSlice = createSlice({
  name: "image",
  initialState: {
    images: [],
  },
  reducers: {
    setImages: (state, action) => {
      state.images=action.payload;
    },
  },
});

export const { setImages } = imageSlice.actions;

export default imageSlice.reducer;
