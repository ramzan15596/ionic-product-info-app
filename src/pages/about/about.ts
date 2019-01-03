import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ProductProvider } from '../../providers/product/product'
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  public bestSellerProducts = [];
  constructor(private ProductProvider: ProductProvider, public navCtrl: NavController) {

  }

  ionViewDidLoad(){
    this.ProductProvider.getProducts()
    .subscribe((allProducts) => {
      this.bestSellerProducts = allProducts.filter(product => product.bestSeller == true);
      console.log(this.bestSellerProducts);
    });
  }

}
