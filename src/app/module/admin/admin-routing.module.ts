import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { UsersComponent } from './users/users.component';


const routes: Routes = [
  {
    path:'',component:AdminComponent,
     title:'AdminPanel',
     children:[
      {
        path:'teacher',
        loadChildren:()=>import('./teacher/teacher.module').then((m) => m.TeacherModule),
       
      } ,
      {
        path:'user',
        loadChildren:()=>import('./users/users.module').then((m)=>m.UsersModule)

      }
      
     ]
  },
  // {
  //   path:'users',component:UsersComponent,
  //   children:[
  //     {
  //       path:'user',
  //       loadChildren:()=>import('./users/users.module').then((m)=>m.UsersModule)

  //     }
  //   ]
  // }
 

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
