import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColdService {

  // private dataUrl = 'node_modules/cold/assets/data.json'; // Replace with your JSON file path
  private dataUrl = 'assets/data.json'; // Replace with your JSON file path

  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get(this.dataUrl);
  }
}
