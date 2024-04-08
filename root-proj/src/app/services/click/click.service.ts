import { Injectable, Output} from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClickService {
  private subjectRandomNum = new BehaviorSubject<number>(1);
  obserableRandomNum = this.subjectRandomNum.asObservable();

  private subjectRandomPosition = new BehaviorSubject<object>({position: 'absolute', top: '50%', left: '50%'});
  obserableRandomPosition = this.subjectRandomPosition.asObservable();

  public onClickFromService() {
    var RandomNum = Math.floor(Math.random() * 4);
    if(RandomNum == 0){
      RandomNum = 1;
    }
    this.subjectRandomNum.next(RandomNum);

    this.setRandomPosition();
  } 

  setRandomPosition() {
    const top = Math.random() * 100 + '%';
    const left = Math.random() * 100 + '%';

    var buttonStyle = {
      position: 'absolute',
      top: top,
      left: left
    };

    this.subjectRandomPosition.next(buttonStyle);
  }
}
