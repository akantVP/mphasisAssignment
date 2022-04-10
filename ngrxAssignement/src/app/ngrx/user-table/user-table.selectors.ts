import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserTableState } from 'src/app/models/user-table';
import * as fromDataTable from './user-table.reducer';

export const selectDataTableState = createFeatureSelector<UserTableState>(fromDataTable.userTableFeatureKey);

export const selectTableData = createSelector(selectDataTableState, (state: UserTableState) => state.tableData);

export const selectFilterQuery = createSelector(selectDataTableState, (state: UserTableState) => state.filterQuery);
export const selectFilterBy = createSelector(selectDataTableState, (state: UserTableState) => state.filterBy);

export const selectData = createSelector(
  selectTableData,
  selectFilterQuery,
  selectFilterBy,
  (tableData: any, filterQuery: any, filterBy: any) => {
    let filteredData = [...tableData];

    // Filter Array
    if (filterQuery !== '') {
      filteredData = filteredData.filter((item) => {
        const result = filterBy
          .map((filterBy: any) => {
            return item[filterBy]?.toLowerCase().includes(filterQuery);
          })
          .some((item: any) => item);
        return result;
      });
    }

    return filteredData;
  }
);

