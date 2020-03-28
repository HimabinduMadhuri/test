import{DoCheck , IterableDiffers , OnInit, Input, Component} from "@angular/core";

import{Employee} from './employee';

@Component({

    selector:'app-emp-itr' ,
    template:`
    <div *ngFor = " let log of itrChangeLogs">
    {{log}}
    </div>
    `
})
export class EmployeeITRDiffComponent implements  DoCheck , OnInit {
    @Input() employeeArray:Employee[];
    itrChangeLogs : string[] =[];
    empDiffer:any;
    constructor(private itrDiffers:IterableDiffers){}
    ngOnInit(){
        this.empDiffer = this .itrDiffers . find([]).create(null);

    }
    ngDoCheck(){
        const empArrayChanges  = this.empDiffer.diff(this.employeeArray);
        if(empArrayChanges){
            empArrayChanges.foreachaddedItem(record =>{
                let  emp = record . item;
                console.log('Added' + emp.name);
                this.itrChangeLogs.push('Added' + emp.name);

            });
            empArrayChanges.forEachRemovedItem(record =>{
                let emp = record .item;
                console.log('Removed' + emp.name);
                this.itrChangeLogs.push('Removed + emp.name');

            });

        }
    }
}

    