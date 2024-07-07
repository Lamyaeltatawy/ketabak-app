import { Component, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  

} from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-all-exercises',
  templateUrl: './all-exercises.component.html',
  styleUrls: ['./all-exercises.component.css']
})
export class AllExercisesComponent implements OnInit {
public questionType: string='' ;
  constructor() { }

  ngOnInit(): void {
  }

    todo:string[] = ['اختيار من متعدد', 'اختيار فردى', 'نص'];
  
    done:string[] = [];
    
    drop(event: CdkDragDrop<string[]>) {
      
      if (event.previousContainer === event.container) {
        moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      } else {
        transferArrayItem(
          event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex,
        );
      }
      console.log("dragged event",event);
      if(event.container.data.length >0){
        event.container.data.forEach(element => {
          this.questionType = element;
        });
      }
      if(event.container.data.length ==0){
        this.questionType = '';
      }
    }
  
  
}
