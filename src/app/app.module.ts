import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeITRDiffComponent } from './employee . itrdiff.component';
import { EmployeeKvDiffComponent } from './employee.kvdiff.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeITRDiffComponent,
    EmployeeKvDiffComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
