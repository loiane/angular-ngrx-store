import { createFeatureSelector, createSelector} from '@ngrx/store';

import { Task } from './../model/task';

export interface TaskState {
  tasks: Task[];
  isLoading: boolean;
  error: any;
}

export const taskInitialState: TaskState = {
  tasks: [],
  isLoading: true,
  error: null
};

export const taskState = createFeatureSelector<TaskState>('task');
export const selectedRecords = createSelector(taskState, (state: TaskState) => state.tasks);
export const selectIsLoading = createSelector(taskState, (state: TaskState) => state.isLoading);
export const selectError = createSelector(taskState, (state: TaskState) => state.error);