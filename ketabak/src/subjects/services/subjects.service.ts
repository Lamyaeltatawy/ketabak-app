import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectsService {
  private dataUrl = '../../assets/data/data.json';
  private postUrl = 'http://localhost:3000/subjects';

  constructor( private http:HttpClient) { }
  getAllSubjects(): Observable<any> {
    return this.http.get<any>(this.dataUrl);

  }
  addSubject(subjectData: any): Observable<any> {
    return this.http.post<any>(this.postUrl, subjectData);
  }
}
