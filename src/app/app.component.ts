import { Component, ViewEncapsulation } from '@angular/core';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'employeeapp';
  constructor(private employeeService:EmployeeService){}
  employeeList:any;
  
  ngOnInit(){
    this.employeeService.getAllEmployees().subscribe(data=>{
      //console.log(data);
      this.employeeList = data
    })
  }

  getFilteredList(status:string):any{
    return this.employeeList?.filter((employee:any)=>{
      if(employee.status == status){
        return employee;
      }
    }
  )}
}
