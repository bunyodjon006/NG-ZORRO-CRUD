import { validateHorizontalPosition } from '@angular/cdk/overlay';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AbstractControl, NonNullableFormBuilder, ValidatorFn,} from '@angular/forms';
import { NzFormTooltipIcon } from 'ng-zorro-antd/form';
import { TeachersService } from '../services/teachers.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { TeachersRequest, TeachersResponse } from '../models/teachers.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-edit-teacher',
  templateUrl: './add-edit-teacher.component.html',
  styleUrls: ['./add-edit-teacher.component.scss']
})
export class AddEditTeacherComponent {
 get isEdit(){
  return this.id > 0;
 }
//  isAdd=true;
  get id(){
    return Number(this.route.snapshot.params['id'])
  }
constructor(private fb:FormBuilder
   , private $teacher:TeachersService,
   private message:NzMessageService 
   , private router:Router 
   ,private route:ActivatedRoute){

if(this.isEdit){
  // this.isAdd=false
$teacher.getById(this.id).subscribe((teacher)=>{
// this.editingModal=teacher;
this.setFormValues(teacher);

 })
}
}

 setFormValues(model:TeachersResponse){
  this.teacherform.controls.name.setValue(model.name);
this.teacherform.controls.age.setValue(model.age)
this.teacherform.controls.addrees.setValue(model.addrees)
this.teacherform.controls.key.setValue(model.key);
}

teacherform=this.fb.nonNullable.group({
  
  name:['',Validators.required],
  age:[0,[Validators.required , Validators.minLength(0)]],
  addrees:['',Validators.required],
  key:[0,[Validators.required , Validators.minLength(0)]]
})



// editingModal?:TeachersResponse;

submit() {
  if (this.teacherform.invalid) {
    this.message.info('ERROR: Xatolik');
    Object.values(this.teacherform.controls).forEach(control => {
      if (control.invalid) {
        control.markAsDirty();
        control.updateValueAndValidity({ onlySelf: true });
      }
    });
  } else if (this.teacherform.valid) {
    const request = this.teacherform.getRawValue();
    if(this.isEdit){
      this.$teacher.edit(this.id,request).subscribe((teacher)=>{
        if(teacher){
          this.router.navigate(['../'],{
            relativeTo:this.route
          
          })
          return;
        }
      })
  }
  this.$teacher.add(request).subscribe((teacher) => {
    if(teacher){
this.router.navigate(['../'],{
relativeTo:this.route

})
    }
    //return
this.message.success("Backendga Muvaffaqiyatli qo'shildi", {
      nzDuration: 10000
    });
  });
  
    }
  
}
reset(){
  this.teacherform.reset()
}

}
