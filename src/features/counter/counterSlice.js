import { createSlice } from '@reduxjs/toolkit';


// here counter is a layer
// such layer are called Slice of the Store
// such slices are created using createSlice
export const counterSlice = createSlice({
  // and the slice has a name called counter
  name: 'counter',
  // who has a initial state
  initialState: {
    // and initial value
    value: 0,
  },
  // and here we describe the reducer
  // Reducers are functions that take the current state
  //  and an action as arguments, and return a new state 
  // result. In other words, (state, action) => newState.
  // here, increment, decrement and incerementByAmount
  // are reducer functions
  reducers: {
    increment: state => {
                // The below are defualt comments you get at creation:
                // Redux Toolkit allows us to write "mutating" logic in reducers. It
                // doesn't actually mutate the state because it uses the Immer library,
                // which detects changes to a "draft state" and produces a brand new
                // immutable state based off those changes
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});


// and we basically export this to counterSlice.actions
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const incrementAsync = amount => dispatch => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount));
  }, 1000);
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectCount = state => state.counter.value;

export default counterSlice.reducer;
