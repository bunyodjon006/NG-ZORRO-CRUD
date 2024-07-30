import { validateHorizontalPosition } from '@angular/cdk/overlay';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {
  AbstractControl,
  
  
  NonNullableFormBuilder,
  ValidatorFn,
  
} from '@angular/forms';
import { NzFormTooltipIcon } from 'ng-zorro-antd/form';
import { TeachersService } from '../services/teachers.service';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-add-edit-teacher',
  templateUrl: './add-edit-teacher.component.html',
  styleUrls: ['./add-edit-teacher.component.scss']
})
export class AddEditTeacherComponent {

  // teacherform = new FormGroup({
  //   name:new FormControl('',[
  //     Validators.required,
  //     Validators.maxLength(20),
  //     Validators.minLength(5)
  //   ])
  //   ,age:new FormControl('',[
  //     Validators.required,
    
  //   ]),
  //   addrees:new FormControl('',[
  //     Validators.required,
      
  //   ]),
  //   key:new FormControl('',[
  //      Validators.required
  //   ])
    
  // })

  // get name(){
  //   return this.teacherform.get('name')
  // }
  // get age(){
  //   return this.teacherform.get('age')
  // }
  // get addrees(){
  //   return this.teacherform.get('addrees')
  // }
  // get key(){
  //   return this.teacherform.get('key')
  // }
constructor(private fb:FormBuilder , private $teacher:TeachersService,private message:NzMessageService){

}
teacherform=this.fb.nonNullable.group({
  name:['',Validators.required],
  age:['',Validators.required],
  addrees:['',Validators.required],
  key:['',Validators.required]
})
add(){
 
  if(this.teacherform.invalid){
    this.message.info('ERROR: Xatolik');
return;
  }
  else if (this.teacherform.valid){
      const request =this.teacherform.getRawValue();
this.$teacher.add(request).subscribe();
this.message.success("Backendga Muvaffaqiyatli qo'shildi",{
  nzDuration:10000
})
  }

  
}


}
