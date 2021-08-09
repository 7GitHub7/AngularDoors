import { Injectable } from '@angular/core';
import { Requiremnt } from "../Requiremnt";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type':'application/json'})
}
@Injectable({
  providedIn: 'root'
})
export class RequiermentService {
  private apiUrl = "http://localhost:5000/requirements"

  constructor(private http: HttpClient) { }

  getTasks(): Observable<Requiremnt[]> {
    return this.http.get<Requiremnt[]>(this.apiUrl);

  }

  // deleteTask(task: Task): Observable<Task> {
  //   const url = this.apiUrl + "/" + task.id;
  //   return this.http.delete<Task>(url);
  // }

  // updateTaskreminder(task: Task): Observable<Task> {
  //   const url = this.apiUrl + "/" + task.id;
  //   return this.http.put<Task>(url,task,httpOptions);
  // }

  // addTask(task: Task): Observable<Task> {
  //   return this.http.post<Task>(this.apiUrl,task,httpOptions);
  // }

}