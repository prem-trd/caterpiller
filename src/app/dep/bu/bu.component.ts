import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-bu',
  templateUrl: './bu.component.html',
  styleUrls: ['./bu.component.css']
})
export class BuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.pieCharts();

  }
  pieCharts() {
    var bar = Highcharts.chart('pie',{
       chart: {
          plotBorderWidth: null,
          plotShadow: false
       },
       title: {
          text:'Top 10 Supplier By Spend'
       },
       tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
       },
       plotOptions: {
          pie: {
             allowPointSelect: true,
             cursor: 'pointer',
             dataLabels: {
                enabled: false,
             }
          }
       },
       credits: {
        enabled: false
     },
          series: [{
          type: 'pie',
          name: 'Browser share',
          data: [
             ['Firefox', 45.0],
             ['IE', 26.8],
             {
                name: 'Chrome',
                y: 12.8,
                sliced: true,
                selected: true
             },
             ['Safari', 8.5],
             ['Opera', 6.2],
             ['Others', 32.7]
          ]
       }]
    });
 }
}
