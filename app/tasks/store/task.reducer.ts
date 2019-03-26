import { Task } from './../model/task';
import { TaskAction, TaskActionTypes } from './task.actions';
import { taskInitialState, TaskState } from './task.state';

export function taskReducer(
  state = taskInitialState, action: TaskAction): TaskState {

  switch (action.type) {

    case TaskActionTypes.LOAD:
      return Object.assign({}, state, {
        isLoading: false,
        error: null,
        tasks: action.payload.tasks
      });

    case TaskActionTypes.CREATE:
      return Object.assign({}, state, {
        error: null,
        tasks: [...state.tasks, action.payload.task]
      });;

    case TaskActionTypes.UPDATE:
      return Object.assign({}, state, {
        error: null,
        tasks: state.tasks.map((task: Task) => {
          return task.id === action.payload.id ? action.payload.task : task;
        })
      });

    case TaskActionTypes.REMOVE:
      return Object.assign({}, state, {
        error: null,
        tasks: state.tasks.filter((task: Task) => {
          return task.id !== action.payload.id;
        })
      });

    default:
      return state;
  }
};