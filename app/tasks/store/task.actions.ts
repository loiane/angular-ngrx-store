import { Action } from '@ngrx/store';

import { Task } from './../model/task';

export enum TaskActionTypes {
  LOAD = '[Task] LOAD Requested',
  CREATE = '[Task] CREATE Requested',
  UPDATE = '[Task] UPDATE Requested',
  REMOVE = '[Task] REMOVE Requested',
  ERROR = '[Task] Error'
}

export class LoadAction implements Action {
  type = TaskActionTypes.LOAD;
  constructor(public payload: { tasks: Task[] }) { }
}

export class CreateAction implements Action {
  type = TaskActionTypes.CREATE;
  constructor(public payload: { task: Task }) { }
}

export class UpdateAction implements Action {
  type = TaskActionTypes.UPDATE;
  constructor(public payload: { id: string, task: Task }) { }
}

export class RemoveAction implements Action {
  type = TaskActionTypes.REMOVE;
  constructor(public payload: { id: string }) { }
}

export class ErrorAction implements Action {
  type = TaskActionTypes.ERROR;
  constructor(public payload: any) { }
}

export type TaskAction
  = LoadAction
  | CreateAction
  | UpdateAction
  | RemoveAction
  | ErrorAction;