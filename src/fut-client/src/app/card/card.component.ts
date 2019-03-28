import { Component, OnInit } from '@angular/core';
import { PredictionService } from '../prediction.service'

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
  position = ""
  stats = { }

  constructor(private predictionService: PredictionService) { 

  }

  ngOnInit() {
  }

  predict(stats: Object) {
    this.predictionService.predict(stats);
  }

  onChange(e) {
    this.position = e.target.value;
  }

  submitInputs() {
    this.stats = {
      Pace: this.pace,
      Shot: this.shot,
      Pass: this.pass,
      Dribble: this.dribble,
      Defense: this.defense,
      Physical: this.physical,
      Position: this.position
    }
    this.predict(this.stats);
  }
}
