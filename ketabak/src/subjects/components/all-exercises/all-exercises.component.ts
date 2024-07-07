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
          if(element == 'اختيار من متعدد'){
            console.log("Multiple Choice");
          }
          else if(element == 'اختيار فردى'){
            console.log("Single Choice");
          }
          else if(element == 'نص'){
            console.log("Text");
          }
        });
      }
    }
  
  
}
