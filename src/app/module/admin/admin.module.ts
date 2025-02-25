import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzIconModule } from 'ng-zorro-antd/icon';
import {NzBreadCrumbModule} from 'ng-zorro-antd/breadcrumb'
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from './users/users.component';


@NgModule({
  declarations: [
    AdminComponent,
    UsersComponent
   
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NzLayoutModule,
    NzIconModule,
    NzBreadCrumbModule,
    NzMenuModule,
    HttpClientModule
    
    

    
  ]
})
export class AdminModule { }
