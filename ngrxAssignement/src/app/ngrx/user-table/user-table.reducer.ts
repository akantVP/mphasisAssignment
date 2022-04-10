import { Action, createReducer, on } from '@ngrx/store';
import * as UserTableActions from './user-table.actions';
import { UserTableState } from 'src/app/models/user-table';

export const INITIAL_FILTER_KEY = { filterKey: '', query: '' }

export const INITIAL_STATE: UserTableState = {
  tableData: [],
  filterQuery: '',
  filterBy: []
};

export const userTableFeatureKey = 'userTable';


export const userTableReducer = createReducer(
  INITIAL_STATE,
  on(UserTableActions.setData, (state: any, { data }: any) => {
    return {
      ...state,
      tableData: data
    };
  }),

  on(UserTableActions.resetDataTableStore, (state: any) => {
    return {
      ...state,
      ...INITIAL_STATE
    };
  }),

  on(UserTableActions.setFilterBy, (state: any, { filters }: any) => {
    return {
      ...state,
      filterQuery: filters.query,
      filterBy: filters.filterBy
    };
  }),
);

export function UserTableReducer(state: UserTableState, action: Action) {
  return userTableReducer(state, action);
}

