import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  images: {
    4: "/images/CategoryImage/tshirts.jpg",
    5: "/images/CategoryImage/jacket.jpg",
    6: "/images/CategoryImage/shorts.jpg",
    7: "/images/CategoryImage/track.jpeg",
    8: "/images/CategoryImage/shorts.jpg",
    9: "/images/CategoryImage/boysShorts.jpeg",
    10: "/images/CategoryImage/boysTshirts.jpg",
    11: "/images/CategoryImage/boysTracks.jpg",
    13: "/images/CategoryImage/bottle.jpg",
    116: "/images/CategoryImage/swimming.jpeg",
    127: "/images/CategoryImage/fullSleeve.jpeg",
  },
};

const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {},
  });
  
  export default categorySlice.reducer;