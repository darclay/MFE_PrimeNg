import { Component } from '@angular/core';
import { ClickService } from 'src/app/services/click/click.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // setting obserable
  random?: number;
  private randomNumberSubscription: Subscription;
  
  buttonStyle = {};
  private randomPositionSubscription: Subscription;

  //variables
  cols = [
    { field: 'productName', header: 'Product Name' },
    { field: 'price', header: 'Price' },
    { field: 'edit', header: '' },
    { field: 'delete', header: ''}
  ];

  products = [
    { productName: 'Product 1', price: 100, edit: '', delete: '' },
    { productName: 'Product 2', price: 200, edit: '', delete: ''  }
  ];
  output?: string;
  elementMicroFE = 'http://localhost:9001/main.js';


  //constructor
  constructor(private clickService: ClickService) {
    this.randomNumberSubscription = this.clickService.obserableRandomNum.subscribe(value => { this.random = value })
    this.randomPositionSubscription = this.clickService.obserableRandomPosition.subscribe(value => { this.buttonStyle = value })
  }

  onClickFromComponent() {
    this.clickService.onClickFromService();
    console.log(`${this.random} from app`)
  }

  deleteProduct(data: any) {
    console.log(`deleteProduct: ${data.productName}`);
    this.output = `deleted: ${data.productName}`;
  }
  
  editProduct(data: any) {
    console.log(`edit: ${data.productName}`);
    this.output = `edited: ${data.productName}`;
  }
}
