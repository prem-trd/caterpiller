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
          text:'Total Spend'
       },
       tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
       },
       plotOptions: {
          pie: {
             allowPointSelect: true,
             cursor: 'pointer',
             dataLabels: {
                enabled: true,
                format: '{point.percentage:.0f} %'
             },
             showInLegend: true
          }
       },
       credits: {
        enabled: false
     },
          series: [{
          type: 'pie',
          name: 'Browser share',
          data: [
             ['E-COMM', 28.0],
             {
                name: 'AEM',
                y: 18.0,
                sliced: true,
                selected: true
             },
             ['THOUGHT WORKS', 54.0]
          ]
       }]
    });
 }
}
