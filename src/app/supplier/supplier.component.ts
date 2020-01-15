import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit {

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
          text:'Total Spend $4.7M'
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
             ['DIGITAL', 54.0],
             ['GIS', 28.0],
             {
                name: 'GasD',
                y: 18.0,
                sliced: true,
                selected: true
             }
          ]
       }]
    });
 }
}
