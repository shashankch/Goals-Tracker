import { UPDATE_STATUS, ADD_GOAL, UPDATE_STREAK } from '../actions/actionTypes';

const initialState = {
  goals: [],
};

export function goals(state = initialState, action) {
  switch (action.type) {
    case ADD_GOAL:
      return {
        goals: [...state.goals, action.goal],
      };
    case UPDATE_STATUS:
    case UPDATE_STREAK:
      let obj = state.goals.filter((item) => item.title === action.status[1]);
      console.log('object', obj.status);
      let filter = state.goals.filter(
        (item) => item.title !== action.status[1],
      );
      obj.status.splice(action.status[2], 0, action.status[0]);
      return {
        goals: [...filter, obj],
      };

    default:
      return state;
  }
}

//  let filter = state.goals.filter((goal) => goal.title !== action.goal.title);
//  return {
//    goals: [...filter, action.goal],
//  };
