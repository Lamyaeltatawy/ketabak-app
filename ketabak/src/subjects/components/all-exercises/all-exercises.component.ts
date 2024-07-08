import { Component, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  

} from '@angular/cdk/drag-drop';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SubjectsService } from 'src/subjects/services/subjects.service';
@Component({
  selector: 'app-all-exercises',
  templateUrl: './all-exercises.component.html',
  styleUrls: ['./all-exercises.component.css']
})
export class AllExercisesComponent implements OnInit {
  public form!: FormGroup;
public questionType: string[]=[];
  constructor(private formBuilder:FormBuilder,private service:SubjectsService) { }

  ngOnInit(): void {
    this.initiateForm();
  }
   initiateForm(){
    this.form = this.formBuilder.group({
      questionText: ['', Validators.required],
      difficulty: ['', Validators.required],
      options: this.formBuilder.array([
        this.createOption(),
        this.createOption()
      ])
    })
   }
   createOption(): FormGroup {
    return this.formBuilder.group({
      optionText: ['', Validators.required],
      isCorrect: [false]
    });
  }

  get options(): FormArray {
    return this.form?.get('options') as FormArray;
  }

  addOption(): void {
    this.options.push(this.createOption());
  }
    todo:string[] = ['اختيار من متعدد', 'اختيار فردى', 'نص'];
  
    done:string[] = [];
    
    drop(event: CdkDragDrop<string[]>) {
      
      if (event.previousContainer === event.container) {

        moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      } else {
        if (event.container.id === "cdk-drop-list-2") 
          return;
        transferArrayItem(
          event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex,
        );
      }
      if(event.container.data.length >0){
        this.questionType=event.container.data

      }
      if(event.container.data.length ==0){
        this.questionType = [];
      }
    }
  
    onSubmit(): void {
        console.log("form",this.form.value);

        this.form.reset()
        
        const formData = this.form.value;
        const jsonString = JSON.stringify(formData);
        console.log(jsonString);

        this.service.addSubject(jsonString).subscribe((data)=>{
          console.log("data passed");
        },(err)=>{
          console.log("err occured");
        })
      
    }
}
