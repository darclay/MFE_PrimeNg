import { Component } from '@angular/core';
import { ClickService } from 'src/app/services/click/click.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {

    // setting obserable
    random?: number;
    private randomNumberSubscription: Subscription;
    
    buttonStyle = {};
    private randomPositionSubscription: Subscription;
  
  
    //constructor
    constructor(private clickService: ClickService) {
      this.randomNumberSubscription = this.clickService.obserableRandomNum.subscribe(value => { this.random = value })
      this.randomPositionSubscription = this.clickService.obserableRandomPosition.subscribe(value => { this.buttonStyle = value })
    }

  onClickFromComponent() {
    this.clickService.onClickFromService();
    console.log(`${this.random} from banner`)
  }
}
