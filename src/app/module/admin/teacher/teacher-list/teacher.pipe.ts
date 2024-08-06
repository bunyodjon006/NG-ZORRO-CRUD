import { Pipe, PipeTransform } from "@angular/core";
import { TeachersRequest, TeachersResponse } from "../models/teachers.model";

@Pipe({
    name:'teachers',
    pure:false
})

export class FilterPipe implements PipeTransform {
    transform( teachers:TeachersResponse[], filterteacher:string) {
       console.log('filter pipe called! ');
       if(teachers.length===0 || filterteacher ===''){
        return teachers;
       }
       else {
        return teachers.filter((teachers)=>
        {
            return teachers.name.toLowerCase() === filterteacher.toLowerCase()
        })
       }
    }

}