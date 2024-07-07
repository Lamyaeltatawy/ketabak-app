import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllSubjectsComponent } from './components/all-subjects/all-subjects.component';
import { AllExercisesComponent } from './components/all-exercises/all-exercises.component';
import { RouterModule } from '@angular/router';
import { SubjectsListComponent } from './components/subjects-list/subjects-list.component';
import { HttpClientModule } from '@angular/common/http';
import {  DragDropModule } from '@angular/cdk/drag-drop';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // This is required for animations




@NgModule({
  declarations: [
    AllSubjectsComponent,
    AllExercisesComponent,
    SubjectsListComponent,
  ],
  imports: [
    CommonModule,RouterModule,HttpClientModule,BrowserAnimationsModule,DragDropModule 
  ],
  exports:[
    AllExercisesComponent,
    AllSubjectsComponent,
    SubjectsListComponent,
    DragDropModule,

  ]
})
export class SubjectsModule { }
