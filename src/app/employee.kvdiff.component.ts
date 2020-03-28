import{Component , DoCheck ,KeyValueDiffers , OnInit , Input} from '@angular/core';

import { Employee } from './employee';
import { IfStmt } from '@angular/compiler';


@Component({
    selector:"app-emp-kv" ,
    template:`
    <div>
    </div>
    `
})

export class EmployeeKvDiffComponent implements DoCheck , OnInit{

    @Input()empArray :Employee[];
    employeeArray:Employee[];
    arrayDiffer: any;
    empDifferMap = new Map<number , any>();
    empMap = new Map<number, Employee>();
    kvChangeLogs : string[] = [];

    constructor(private kvDiffers: KeyValueDiffers){}

    ngOnInit(){
       
        this.arrayDiffer = this.kvDiffers.find([]).create();
        this.employeeArray.forEach(emp  =>{
            this.empDifferMap[emp.id] = this.kvDiffers.find(emp).create();
            this.empMap[emp.id]= emp;

        })
    }

    ngDoCheck(){
        //Detect changes in array when item added or removed
        const empArrayChanges  = this.arrayDiffer.diff(this.employeeArray);
        if(empArrayChanges){
            empArrayChanges.forEachAddedItem((record )=>{
                let emp = record.currentValue;
                this.empDifferMap.set(emp.id , this.kvDiffers.find(emp).create());
                this.empMap.set(emp.id , emp);
                this.kvChangeLogs.push('Added' + empArrayChanges.name);
            });
           
            empArrayChanges.forEachRemovedItem((record) =>{
                let emp = record .previousValue;
                this.empDifferMap.delete(emp.id);
                this.empMap.delete(emp.id);
                this.kvChangeLogs.push('Removed' + emp.name);
            });
        }

        //Delete Changes in object inside array
        for(let [key , empDiffer] of this.empDifferMap){
            const empChanges = empDiffer.diff(this.empMap.get(key));
            if(empChanges){
                empChanges.forEachChangedItem(record =>{
                    this.kvChangeLogs.push('....Update (id = ' + key + ')-----');
                    this.kvChangeLogs.push('previous value:' + record .previousValue);
                    this.kvChangeLogs.push('Current  value:' + record .currentValue);
                    this.kvChangeLogs.push('........,,,');
                });

                
            }
        }

    }
}
    