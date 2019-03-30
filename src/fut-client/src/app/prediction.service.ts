import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Response } from './response';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class PredictionService {

  private errorSource = new BehaviorSubject<string>("");
  private predictionSource = new BehaviorSubject<Number>(0);

  currentError = this.errorSource.asObservable();
  currentPrediction = this.predictionSource.asObservable();

  private apiUrl = "http://localhost:5000/predict";
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  predict(stats: Object) {
    let response = this.http.post<Object>(this.apiUrl, stats, this.httpOptions);
    response.subscribe((res: Response) => {
      this.updateErrorMessage(res.error);
      if (!res.error)
        this.updatePrediction(res.prediction);
    });
  }

  updateErrorMessage(error: string) {
    this.errorSource.next(error);
  }

  updatePrediction(prediction: Number) {
    this.predictionSource.next(prediction);
  }
}
