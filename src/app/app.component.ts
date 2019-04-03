import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'poc-multiple-app';

  columnDefs = [
    {headerName: 'WINS', field: 'make', width: 100},
    {headerName: 'Model', field: 'model'},
    {headerName: 'Price', field: 'price'},
    {headerName: 'Test', field: 'test'},
    {headerName: 'Test1', field: 'test1'},
    {headerName: 'Test2', field: 'test2'},
    {headerName: 'Test3', field: 'test3'},
    {headerName: 'Test4', field: 'test4'},
    {headerName: 'Test5', field: 'test5'},
    {headerName: 'Test6', field: 'test6'},

  ];

  rowData = [
    {make: 'Toyota', model: 'Celica', price: 35000, test: 'testtttttttttttttttttttt', test1: 'test1', test2: 'test2', test3: 'test3', test4: 'test4', test5: 'test5', test6: 'test6'},
    {make: 'Ford', model: 'Mondeo', price: 32000, test: 'test',  test1: 'test1', test2: 'test2', test3: 'test3', test4: 'test4', test5: 'test5', test6: 'test6'},
    {make: 'Porsche', model: 'Boxter', price: 72000,  test: 'test',  test1: 'test1', test2: 'test2', test3: 'test3', test4: 'test4', test5: 'test5', test6: 'test6'},
    {make: 'Porsche', model: 'Boxter', price: 72000,  test: 'test',  test1: 'test1', test2: 'test2', test3: 'test3', test4: 'test4', test5: 'test5', test6: 'test6'},
  ];

  onGridReady(params) {
    params.api.sizeColumnsToFit();
  }
}
