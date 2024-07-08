import { Component, OnInit } from '@angular/core';
import { SubjectsService } from 'src/subjects/services/subjects.service';

@Component({
  selector: 'app-subjects-list',
  templateUrl: './subjects-list.component.html',
  styleUrls: ['./subjects-list.component.css']
})
export class SubjectsListComponent implements OnInit {
 public subjectList:any[]=[]
  constructor(private service:SubjectsService) { }

  ngOnInit(): void {
  this.service.getAllSubjects().subscribe(data=>{
    this.subjectList=data;
  })
  }

}
