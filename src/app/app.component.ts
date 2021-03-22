import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'northwind';
  user = "Hamza Kavak";
  product1 = { productId: 1, productName: "Bardak", categoryId: 2, unitPrice: 5 };
  product2 = { productId: 2, productName: "Telefon", categoryId: 3, unitPrice: 5000 };
  product3 = { productId: 3, productName: "Bilgisayar", categoryId: 3, unitPrice: 5800 };
  product4 = { productId: 4, productName: "Kitap", categoryId: 1, unitPrice: 50 };
  product5 = { productId: 5, productName: "Çatal", categoryId: 2, unitPrice: 4 };

  products = [this.product1, this.product2, this.product3, this.product4, this.product5];

}
