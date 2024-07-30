import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { UsersResponse } from '../models/users.model';
import * as XLSX from 'xlsx'
import { Xliff } from '@angular/compiler';
@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  users:UsersResponse[]=[];
  ngOnInit(): void {
   this.getAll();
  }
  constructor(private $user:UsersService){}
  getAll(){
    this.$user.getall().subscribe((response)=>{
   this.users=response
    })
  }
exportToExcel(){
  const ws=XLSX.utils.json_to_sheet(this.users);
  const wb=XLSX.utils.book_new();
   XLSX.utils.book_append_sheet(wb,ws,'Placeholder');
   XLSX.writeFile(wb,'UserList.xlsx');
}

}
