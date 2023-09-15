import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import{ReactiveFormsModule} from '@angular/forms';
import{FormsModule} from'@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit{
courseForm!:FormGroup;
  //initForm: any;

  constructor(){}

  ngOnInit() {
    this.initForm();
  }

  onSubmit(){}

  private initForm(){
    this.courseForm=new FormGroup({
      courseName: new FormControl(null, Validators.required),
      courseDesc: new FormControl(null),
      CourseAmount: new FormControl(null)
    });

  }

}
