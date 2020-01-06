import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'caterpillerscreen';
  Isproduct: boolean;
  IsStock: boolean;
  Isorder: boolean;
  Ismarketing: boolean;
  Issales: boolean;
  constructor(private router:Router){}
  Stock(data: any) {
    console.log(data);
    if (data === 'Stock') {
      console.log(data);
      this.IsStock = true;
      this.Isorder = false;
      this.Ismarketing = false;
      this.Issales = false;
    }
    }
    orders(data: any){
      if (data === 'orders') {
        this.Isorder = true;
        this.IsStock = false;
        this.Ismarketing = false;
        this.Issales = false;
      }
    }
    marketing(data: any) {
      if (data === 'marketing') {
        this.Ismarketing = true;
        this.Isorder = false;
        this.IsStock = false;
        this.Issales = false;
      }
    }
    sales(data: any) {
      if (data === 'sales') {
        this.Issales = true;
        this.Ismarketing = false;
        this.Isorder = false;
        this.IsStock = false;
      }
    }
}
