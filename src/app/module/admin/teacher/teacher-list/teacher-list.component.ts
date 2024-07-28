import { Component, OnInit } from '@angular/core';
import { TeachersService } from '../services/teachers.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { TeachersResponse } from '../models/teachers.model';
import { id_ID } from 'ng-zorro-antd/i18n';


@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.scss']
})
export class TeacherListComponent implements OnInit {
  
  

  teachers:TeachersResponse[]=[];
  


  constructor(private $teachers:TeachersService){

  }

ngOnInit(): void {
this.getAll();

  }
  
  getAll(){
    this.$teachers.getAll().subscribe((response)=>{
this.teachers=response;
    })
  }
  

 

}
