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
public questionType: string[]=[];
  constructor() { }

  ngOnInit(): void {
  }

    todo:string[] = ['اختيار من متعدد', 'اختيار فردى', 'نص'];
  
    done:string[] = [];
    
    drop(event: CdkDragDrop<string[]>) {
      
      if (event.previousContainer === event.container) {
        console.log(" first condition",event);

        moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      } else {
        console.log(" second condition",event);
        if (event.container.id === "cdk-drop-list-2") 
          return;
        transferArrayItem(
          event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex,
        );
      }
      console.log("dragged event",event);
      if(event.container.data.length >0){
        this.questionType=event.container.data

      }
      if(event.container.data.length ==0){
        this.questionType = [];
      }
    }
  
  
}
