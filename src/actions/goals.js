import {
  UPDATE_STATUS,
  ADD_GOAL,
  START_ACTION,
  DELETE_GOAL,
} from './actionTypes';

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

export function deleteGoal(goal) {
  
  return {
    type: DELETE_GOAL,
    goal,
  };
}

export function startAction() {
  return {
    type: START_ACTION,
  };
}
