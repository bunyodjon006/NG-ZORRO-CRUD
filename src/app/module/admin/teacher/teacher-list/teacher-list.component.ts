import { Component, OnInit } from '@angular/core';
import { TeachersService } from '../services/teachers.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { TeachersResponse } from '../models/teachers.model';
import { id_ID } from 'ng-zorro-antd/i18n';
import * as XLSX from 'xlsx'
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.scss']
})
export class TeacherListComponent implements OnInit {

  filterteacher:string='';
   filterTeachers:TeachersResponse[]=[];
  teachers:TeachersResponse[]=[];
  
get filterteachers(){
  return this.filterteacher;
}
set filterteachers(value:string){
 this.filterteacher=value;
 this.teachers=this.Filterteachername(value)
}

onSearch(){
  
}

Filterteachername(filterTerm:string){
  if(this.teachers.length===0 || this.filterteacher ===''){
    return this.teachers;
   }
   else {
    return this.teachers.filter((teacher)=>
    {
        return teacher.name.toLowerCase() === filterTerm.toLowerCase()
    })
   }
  }
  
  constructor(private $teachers:TeachersService , private router:Router,
    private route:ActivatedRoute
  ){

  }

ngOnInit(): void {
this.newMethod();
  }
  

  private newMethod(){
    this.getAll();
this.filterTeachers=this.teachers;
  }
  
  getAll(){
    this.$teachers.getAll().subscribe((response)=>{
this.teachers=response;
    })

  
  }
    exportToExcel(){
      const ws=XLSX.utils.json_to_sheet(this.teachers);
      const wb=XLSX.utils.book_new();
       XLSX.utils.book_append_sheet(wb,ws,'Placeholder');
       XLSX.writeFile(wb,'UserList.xlsx');
    }
    
    delete(id:number){
this.$teachers.delete(id).subscribe(()=>{
  this.newMethod()
})
    }
   
//   edit(id:number){

// this.router.navigate(['edit',id],  {relativeTo:this.route}
// )
//   }

}





