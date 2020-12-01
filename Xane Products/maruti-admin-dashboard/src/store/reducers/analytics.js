
import * as action_types from "../action_types/analytics";
const initialState = {
  loading: true,
  data: {},
};


export const analyticsReducer = (state = initialState, action) => {
  switch (action.type) {
    case action_types.FETCH_ANALYTICS_SUCCESS:
      return {
        ...state,
        loading:false,
        data:action.payload
      }
    default:
      return state;
  }
};
