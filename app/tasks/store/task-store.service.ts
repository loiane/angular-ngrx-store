import { Injectable } from '@angular/core';
import { createFeatureSelector, createSelector, Store } from '@ngrx/store';

import { AppState } from './../../store/app.reducer'
import { Task } from './../model/task';
import * as State from './task.state';
import * as Action from './task.actions';

@Injectable()
export class TaskStoreService {

  static count = 0;

  constructor(private store: Store<AppState>) { }

  private dispatchAction(action: Action.TaskAction) {
    this.store.dispatch(action);
  }

  dispatchLoadAction() {
    this.dispatchAction(new Action.LoadAction({ tasks: [] }));
  }

  dispatchCreateAction(record: Task) {
    TaskStoreService.count++;
    record.id = `${TaskStoreService.count}`;
    this.dispatchAction(new Action.CreateAction({ task: record }));
  }

  dispatchUpdateAction(record: Task) {
    this.dispatchAction(new Action.UpdateAction({ id: record.id, task: record }));
  }

  dispatchRemoveAction(id) {
    this.dispatchAction(new Action.RemoveAction({ id: id }));
  }

  // sample of how to select piece of the state
  getTasks() {
    return this.store.select(State.selectedRecords);
  }

  getIsLoading() {
    return this.store.select(State.selectIsLoading);
  }

  getError() {
    return this.store.select(State.selectError);
  }
}