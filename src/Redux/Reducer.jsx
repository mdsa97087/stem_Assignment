import { STORE_VALUE } from "./Action_Type";


const initialState = {
  value: '',
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case STORE_VALUE:
      return {
        ...state,
        value: action.payload,
      };
    default:
      return state;
  }
};

export default Reducer;


