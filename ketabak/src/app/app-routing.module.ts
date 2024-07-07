import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { AllSubjectsComponent } from 'src/subjects/components/all-subjects/all-subjects.component';
import { AllExercisesComponent } from 'src/subjects/components/all-exercises/all-exercises.component';
import { SubjectsListComponent } from 'src/subjects/components/subjects-list/subjects-list.component';

const routes: Routes = [
  {
    path: 'Home', component: MainComponent
  },
  {path: 'subjects', component: AllSubjectsComponent ,children: [
    
    { path: 'exercises', component: AllExercisesComponent ,pathMatch:'full'},
    {path:'all-subjects',component:SubjectsListComponent}
  ]}

  , { path: '**', redirectTo: 'Home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
