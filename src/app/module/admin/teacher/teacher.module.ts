import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';
import { TeacherListComponent } from './teacher-list/teacher-list.component';
import { AddEditTeacherComponent } from './add-edit-teacher/add-edit-teacher.component';


@NgModule({
  declarations: [
    TeacherListComponent,
    AddEditTeacherComponent
  ],
  imports: [
    CommonModule,
    TeacherRoutingModule
  ]
})
export class TeacherModule { }
