const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    incre: (prevState, action) => {
      console.log(action);
      return prevState + action.payload;
    },
    decre: (prevState, action) => {
      return prevState - 1;
    },
    reset: (prevState, action) => {
      return (prevState = 0);
    },
  },
});
