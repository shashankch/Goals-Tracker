import { UPDATE_STATUS, ADD_GOAL, UPDATE_STREAK } from './actionTypes';

export function updateStatus(status) {
  return {
    type: UPDATE_STATUS,
    status,
  };
}
export function addGoal(goal) {
  return {
    type: ADD_GOAL,
    goal,
  };
}
export function updateStreak(streak) {
  return {
    type: UPDATE_STREAK,
    streak,
  };
}
