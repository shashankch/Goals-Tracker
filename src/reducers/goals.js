import {
  UPDATE_STATUS,
  ADD_GOAL,
  DELETE_GOAL,
  START_ACTION,
} from '../actions/actionTypes';

const initialState = {
  goals: [],
  flag: false,
};

export function goals(state = initialState, action) {
  switch (action.type) {
    case START_ACTION:
      return {
        goals: state.goals,
        flag: true,
      };

    case ADD_GOAL:
      return {
        goals: [...state.goals, action.goal],
        flag: false,
      };
    case UPDATE_STATUS:
      let updated = state.goals.map((goal) => {
        if (goal.title === action.status[1]) {
          goal.status[action.status[2]] = action.status[0];

          if (goal.status[action.status[2]] === 'Done') {
            goal.streak += 1;
          } else if (
            goal.status[action.status[2]] === 'None' ||
            goal.status[action.status[2]] === 'Not-Done'
          ) {
            goal.streak -= 1;
          }
        }
        return goal;
      });
      return {
        goals: updated,
      };
    case DELETE_GOAL:
      let filtered = state.goals.filter((goal) => goal.key !== action.goal.key);
      return {
        flag: false,
        goals: filtered,
      };
    default:
      return state;
  }
}
