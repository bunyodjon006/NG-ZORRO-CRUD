import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { AddEditUsersComponent } from './add-edit-users/add-edit-users.component';
import { NzTableModule } from 'ng-zorro-antd/table';

import {NzDividerModule} from 'ng-zorro-antd/divider'
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { UsersListComponent } from './users-list/users-list.component';



@NgModule({
  declarations: [
    AddEditUsersComponent,
    UsersListComponent,
    

  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
     NzTableModule,
    NzDividerModule,
    NzButtonModule,
    NzIconModule
  ]
})
export class UsersModule { }
