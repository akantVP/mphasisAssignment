export interface User {
  id: number;
  name: string;
}

export interface UserTableState {
  tableData: any[];
  filterQuery: string;
  filterBy: string[];
}

export interface HeaderRowItem {
  displayName: string;
  key: string;
}
