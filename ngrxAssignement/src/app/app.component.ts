import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { FormControl } from '@angular/forms';

// RxJs
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

// NgRx
import { Store } from '@ngrx/store';
import { UserTableState } from './models/user-table';
import { setFilterBy } from './ngrx/user-table/user-table.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  data$!: Observable<any[]>;
  headerRow = [
    { displayName: 'ID', key: 'id'},
    { displayName: 'Name', key: 'name'},
    { displayName: 'Role', key: 'role'}
  ];

  searchControl = new FormControl('')
  apiControl = new FormControl('')
  constructor(private userService: UserService, private store: Store<UserTableState>) {}

  ngOnInit() {
    this.apiControl.setValue('dev');
    this.data$ = this.userService.getData(this.apiControl.value).pipe(
      startWith(null),
    );

    this.searchControl.valueChanges.pipe(
      map(query => query.toLowerCase())
    ).subscribe((query) => {
      this.store.dispatch(setFilterBy({ filters: { filterBy: ['name'], query } }));
    })

    this.apiControl.valueChanges.subscribe((query) => {
      this.data$ = this.userService.getData(this.apiControl.value)
    })
  }
  title = 'ngrxAssignement';
}
