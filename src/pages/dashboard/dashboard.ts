import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DashboardService} from '../../providers/dashboard-service';
import * as HighCharts from 'highcharts';

/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {

  private products : Array<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams,
      public dashboardService: DashboardService) {

  }

  ionViewDidLoad() {

var myChart = HighCharts.chart('container', {
chart: {
type: 'bar'
},
title: {
text: 'Fruit Consumption'
},
xAxis: {
categories: ['Apples', 'Bananas', 'Oranges']
},
yAxis: {
title: {
text: 'Fruit eaten'
}
},
series: [{
name: 'Jane',
data: [1, 0, 4]
}, {
name: 'John',
data: [5, 7, 3]
}]
});
    this.dashboardService.getGoodDashboards().subscribe(products =>  {
        console.log('this is a test');
        console.log(products);
        this.products = products;
    } )
  }

}
