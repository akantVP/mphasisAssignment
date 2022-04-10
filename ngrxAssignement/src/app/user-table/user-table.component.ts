import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { UserTableState, HeaderRowItem } from 'src/app/models/user-table';

// NgRx
import { Store } from '@ngrx/store';
import * as dataTableActions from '../ngrx/user-table/user-table.actions';
import * as dataTableSelectors from 'src/app/ngrx/user-table/user-table.selectors';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit,OnChanges {
  @Input() data!: any[];
  @Input() headerRow!: HeaderRowItem[];

  public tableData$!: Observable<any>;


  constructor(private store: Store<UserTableState>) { }

  ngOnInit(): void {
    // DISPATCH
    this.store.dispatch(dataTableActions.setData({ data: this.data }));

    // SELECTORS
    this.tableData$ = this.store.select(dataTableSelectors.selectData);
  }

  ngOnChanges(changes: SimpleChanges): void {
      this.store.dispatch(dataTableActions.setData({ data: changes.data.currentValue }));
  }

}
