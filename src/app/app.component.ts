import { Component } from '@angular/core';
import { Employee } from './employee';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  employeeArray =[];
  index=103;
  ngOnInit(){
    this.employeeArray.push(new Employee(100 , "sai"));
    this.employeeArray.push(new Employee(101 , "Ram"));
    this.employeeArray.push(new Employee(102 , "bindu"));
  }
  Remove(index){
    this.employeeArray.splice(index , 1);
    console.log(index);

  }
  Update(index){
    this.employeeArray[index].name += "-U";

  }
  Add(){
    this.employeeArray.push(new Employee(this.index , "Name" + this.index++));
    console.log('Employee added :' + JSON.stringify(this.employeeArray))
  }
}
