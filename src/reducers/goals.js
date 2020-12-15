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
      return {};
    case UPDATE_STREAK:
      return {};
    default:
      return state;
  }
}
