import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import Navi from '../../app/array';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  Name = Navi[0];
  Surname=Navi[1];


}
