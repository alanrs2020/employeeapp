import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.scss']
})

export class EmployeeTableComponent {
  @Input() dataSource:any[] = [{
    "employeeId":1,
    "name":"Jim",
    "designation":"Manager",
    "location":"New York",
    "status":"Active"
},
{
    "employeeId":2,
    "name":"Corbett",
    "designation":"HR",
    "location":"Canada",
    "status":"Temporarily suspended"
},
{
    "employeeId":3,
    "name":"Harry",
    "designation":"Designer",
    "location":"Paris",
    "status":"Inactive"
},
{
    "employeeId":4,
    "name":"Potter",
    "designation":"Developer",
    "location":"Riyadh",
    "status":"Terminated"
}];

  displayedColumns: string[] = ['employeeId', 'name','designation' ,'location', 'status'];
  
  ngOnInit(){
    console.log(this.dataSource)
  }
}