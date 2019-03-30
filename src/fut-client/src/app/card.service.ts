import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Constants } from './config';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  private cardSource = new BehaviorSubject<string>(Constants.rareGold);
  
  cardType = this.cardSource.asObservable();
  constructor() { }

  updateCardType(newType: string) {
    let rarity;
    switch (newType) {
      case "prime-icon":
        rarity = Constants.primeIcon;
        break;
      case "base-icon":
        rarity = Constants.baseIcon;
        break;
      case "toty":
        rarity = Constants.toty;
        break;
      case "hero":
        rarity = Constants.hero;
        break;
      case "carniball":
        rarity = Constants.carniball;
        break;
      case "poty":
        rarity = Constants.poty;
        break;
      case "eplpotm":
        rarity = Constants.eplpotm;
        break;
      case "bpotm":
        rarity = Constants.bpotm;
        break;
      case "dmotm":
        rarity = Constants.dmotm;
        break;
      case "clmotm":
        rarity = Constants.clmotm;
        break;
      case "elmotm":
        rarity = Constants.elmotm;
        break;
      case "flashback":
        rarity = Constants.flashback;
        break;
      case "birthday":
        rarity = Constants.birthday;
        break;
      case "future":
        rarity = Constants.futureStars;
        break;
      case "futmas":
        rarity = Constants.futmas;
        break;
      case "headliner":
        rarity = Constants.headliner;
        break;
      case "ones-to-watch":
        rarity = Constants.onesToWatch;
        break;
      case "uefa":
        rarity = Constants.uefa;
        break;
      case "non-rare-gold":
        rarity = Constants.nonRareGold;
        break;
      case "rare-gold":
        rarity = Constants.rareGold;
        break;
      case "if-gold":
        rarity = Constants.ifGold;
        break;
      case "non-rare-silver":
        rarity = Constants.nonRareSilver;
        break;
      case "rare-silver":
        rarity = Constants.rareSilver;
        break;
      case "if-silver":
        rarity = Constants.ifSilver;
        break;
      case "non-rare-bronze":
        rarity = Constants.nonRareBronze;
        break;
      case "rare-bronze":
        rarity = Constants.rareBronze;
        break;
      case "if-bronze":
        rarity = Constants.ifBronze;
        break;
      case "scream":
        rarity = Constants.scream;
        break;
    }
    this.cardSource.next(rarity);
  }
}
