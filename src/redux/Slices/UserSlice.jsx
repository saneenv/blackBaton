import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  id: null,
  rememberMe: false, // To track if the user chose "Remember Me"
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { id, rememberMe } = action.payload;
      state.id = id;
      state.rememberMe = rememberMe;

      // Save to localStorage only if "Remember Me" is checked
      if (rememberMe) {
        localStorage.setItem('userId', id);
      }
    },
    clearUser: (state) => {
      state.id = null;
      state.rememberMe = false;
      localStorage.removeItem('userId'); // Clear stored data on logout
    },
    loadUserFromStorage: (state) => {
      const storedId = localStorage.getItem('userId');
      if (storedId) {
        state.id = storedId;
        state.rememberMe = true; // Assume "Remember Me" was checked if data exists
      }
    },
  },
});

export const { setUser, clearUser, loadUserFromStorage } = userSlice.actions;
export default userSlice.reducer;
