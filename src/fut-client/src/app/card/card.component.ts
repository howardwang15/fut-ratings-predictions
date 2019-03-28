import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  pace = ""
  shot = ""
  pass = ""
  dribble = ""
  defense = ""
  physical = ""

  private apiUrl = "http://localhost:5000/predict";
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { 

  }

  ngOnInit() {
  }

  test(stats: Object): Observable<String> {
    return this.http.post<String>(this.apiUrl, stats, this.httpOptions);
  }

  submitInputs() {
    let stats = {
      pace: this.pace,
      shot: this.shot,
      pass: this.pass,
      dribble: this.dribble,
      defense: this.defense,
      physical: this.physical
    }
    let response = this.test(stats).subscribe(res => console.log(res));
    console.log(response);
  }

}
