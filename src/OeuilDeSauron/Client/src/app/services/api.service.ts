import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project } from '../models/project';
import { Observable } from 'rxjs';
import { CurrentUser } from '../models/current-user';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  apiUrl: string;
  apiProjectUrl: string;

 

  constructor(private http: HttpClient) {
    this.apiUrl = "https://localhost:5001/api/";
    this.apiProjectUrl = this.apiUrl + "project";
  
  }

  getAllProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.apiProjectUrl +"/all");
  }
  addProject(project: Project): Observable<Project> {
    return this.http.post<Project>(this.apiProjectUrl, project);
  }
  deleteProject(id: string): Observable<void> {
    const url = `${this.apiProjectUrl}/${id}`;
    return this.http.delete<void>(url);
  }
  updateProject(project: Project): Observable<Project> {
    return this.http.put<Project>(this.apiProjectUrl + '/' + project.id, project);
  }
  getProjectById(id: string): Observable<Project> {
    return this.http.get<Project>(this.apiProjectUrl +'/' + id);
  }
  
  getProjectByUserScenario() :Observable<Project[]> {
    return this.http.get<Project[]>(this.apiProjectUrl+'?projectType=0');
  }
  getProjectBySSL() :Observable<Project[]> {
    return this.http.get<Project[]>(this.apiProjectUrl+'?projectType=1');
  }
  getProjectByDns() :Observable<Project[]> {
    return this.http.get<Project[]>(this.apiProjectUrl+'?projectType=2');
  }




}
