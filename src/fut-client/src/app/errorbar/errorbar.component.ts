import { Component, OnInit } from '@angular/core';
import { PredictionService } from '../prediction.service';

@Component({
  selector: 'app-errorbar',
  templateUrl: './errorbar.component.html',
  styleUrls: ['./errorbar.component.scss']
})
export class ErrorbarComponent implements OnInit {

  error:string;
  constructor(private prediction: PredictionService) { }

  ngOnInit() {
    this.prediction.currentError.subscribe(currentError => this.error = currentError);
  }

  closeErrorPopup() {
    this.prediction.updateErrorMessage("");
  }
}
