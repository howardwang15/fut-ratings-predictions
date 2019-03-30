import { Component, OnInit } from '@angular/core';
import { PredictionService } from '../prediction.service';
import { CardService } from '../card.service';
import { Constants } from '../config';

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
  prediction: Number;
  cardType: string;
  stats = { }

  constructor(private predictionService: PredictionService, private cardService: CardService) { 

  }

  ngOnInit() {
    this.predictionService.currentPrediction.subscribe(currentPrediction => this.prediction = currentPrediction);
    this.cardService.cardType.subscribe(currentCardType => this.cardType = currentCardType);
  }

  predict(stats: Object) {
    this.predictionService.predict(stats);
  }

  updateCardType(e) {
    if (!e.target.value)
      return;
    
    this.cardService.updateCardType(e.target.value);
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
