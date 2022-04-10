import { createAction, props } from '@ngrx/store';

enum Actions {
  SET_USER_TABLE = '[User Table] Set User Table Data',
  RESET_USERTABLE_STORE = '[User Table] Reset Store',
  SET_FILTER_BY = '[User Table] Set Filter By Properties and Query',
}

export const setData = createAction(Actions.SET_USER_TABLE, props<{ data: any[] }>());
export const resetDataTableStore = createAction(Actions.RESET_USERTABLE_STORE);
export const setFilterBy = createAction(Actions.SET_FILTER_BY, props<{ filters: { filterBy: string[]; query: string } }>());




