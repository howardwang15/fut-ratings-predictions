import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class PredictionService {

  private errorSource = new BehaviorSubject<string>("");
  private prediction = new BehaviorSubject<Number>(0);

  currentError = this.errorSource.asObservable();
  currentPrediction = this.prediction.asObservable();

  private apiUrl = "http://localhost:5000/predict";
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  predict(stats: Object): Observable<Object> {
    let response = this.http.post<Object>(this.apiUrl, stats, this.httpOptions);
    response.subscribe(res => {
      this.updateErrorMessage(res.error);
    });
    return response;
  }

  updateErrorMessage(error: string) {
    this.errorSource.next(error);
  }
}
