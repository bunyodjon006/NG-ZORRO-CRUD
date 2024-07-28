import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';
import { TeacherListComponent } from './teacher-list/teacher-list.component';
import { AddEditTeacherComponent } from './add-edit-teacher/add-edit-teacher.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import {NzDividerModule} from 'ng-zorro-antd/divider'
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';


@NgModule({
  declarations: [
    TeacherListComponent,
    AddEditTeacherComponent
  ],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    NzTableModule,
    NzDividerModule,
NzButtonModule,
NzIconModule


  ]
})
export class TeacherModule { }
