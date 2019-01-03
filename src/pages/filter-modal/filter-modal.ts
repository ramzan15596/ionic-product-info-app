import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the FilterModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-filter-modal',
  templateUrl: 'filter-modal.html',
})
export class FilterModalPage {
  public femaleSelected = true;
  public maleSelected = true;

  constructor(private viewController: ViewController ,public navCtrl: NavController, public navParams: NavParams) {
    this.femaleSelected = this.navParams.get("femaleSelected");
    this.maleSelected = this.navParams.get("maleSelected");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FilterModalPage');
  }

  closeModal(){
    let filterState = {
      femaleSelected: this.femaleSelected,
      maleSelected: this.maleSelected
    }

    this.viewController.dismiss(filterState);
    // this.navCtrl.pop();
  }
}
