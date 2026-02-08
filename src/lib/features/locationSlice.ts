import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LocationState {
  name: string;
  isLoading: boolean;
  error: string | null;
}

const initialState: LocationState = {
  name: "India",
  isLoading: false,
  error: null,
};

const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    setLocation: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    setLocationLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setLocationError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const { setLocation, setLocationLoading, setLocationError } =
  locationSlice.actions;
export default locationSlice.reducer;
