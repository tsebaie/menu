import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import Navi from '../../app/array';
import {HomePage} from '../../pages/home/home';

/**
 * Generated class for the Home1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home1',
  templateUrl: 'home1.html',
})
export class Home1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Home1Page');
  }

  submit(Name,Surname,Gender,IdNo,Nationality,StreetName,City,Province,PostalCode,EmailAdress){
    Navi[0] = Name;
    Navi[1] =Surname;
    // Navi[2] =Gender;
    // Navi[3] =IdNo;
    // Navi[4] =Nationality;
    // Navi[5] =StreetName;
    // Navi[6] =City;
    // Navi[7] =Province;
    // Navi[8] =PostalCode;
    // Navi[9] =EmailAdress;
    this.navCtrl.setRoot(HomePage);
  }

}
