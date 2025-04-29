import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  images: {
    4: "/images/CategoryImage/TSHIRT.png",
    5: "/images/CategoryImage/JACKET.png",
    6: "/images/CategoryImage/SHORTS.png",
    7: "/images/CategoryImage/TRACK PANT.png",
    8: "/images/CategoryImage/shorts.jpg",
    9: "/images/CategoryImage/boysShorts.jpeg",
    10: "/images/CategoryImage/boysTshirts.jpg",
    450: "/images/CategoryImage/TRACK 2.png",
    219: "/images/CategoryImage/BOTTLE.png",
    116: "/images/CategoryImage/swimming.jpeg",
    127: "/images/CategoryImage/fullSleeve.jpeg",
    616: "/images/CategoryImage/POLO.png",
    301: "/images/CategoryImage/BOTTLE.png",
    358: "/images/CategoryImage/TRACK 2.png",

  },
};

const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {},
  });
  
  export default categorySlice.reducer;