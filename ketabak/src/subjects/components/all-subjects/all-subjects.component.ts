import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-subjects',
  templateUrl: './all-subjects.component.html',
  styleUrls: ['./all-subjects.component.css']
})
export class AllSubjectsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

}
