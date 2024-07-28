import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';



const routes: Routes = [

  
  {
    path:'admin',
    loadChildren:()=> 
      import('./module/admin/admin.module').then(m=> m.AdminModule)
  },
  {
    path:'client',
    loadChildren:()=> import('./module/client/client.module').then(m=> m.ClientModule)

  },
{
    path:'',
    redirectTo:"client",
    pathMatch:'full'
  },
  {
    path: '**',
    component: NotfoundComponent
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
