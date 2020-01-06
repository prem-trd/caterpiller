import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {


  ngOnInit() {
    this.pieCharts();
    this.spendcate();
    this.spendbu();
    this.digital();
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
 spendcate() {
    var bar = new Highcharts.Chart('pie2', {
        chart: {
            plotBorderWidth: null,
            plotShadow: false
         },
         title: {
            text:'Spend By Category'
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
 spendbu() {
    var bar = new Highcharts.Chart('pie3', {
        chart: {
            type: 'pie',
            options3d: {
                enabled: true,
                alpha: 70,
                beta: 0
            }
        },
         title: {
            text:'Spend By Dep\Bu'
         },
         tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
         },
         plotOptions: {
            pie: {
               allowPointSelect: true,
               cursor: 'pointer',
               depth: 35,
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
 digital(){
    Highcharts.chart('line', {
        title: {
            text: 'Digital Savings'
        },
        xAxis: {
            min: -0.5,
            max: 5.5,
            
        },
        yAxis: {
            min: 0,
            title: {
                text:null
             },
        },
           credits: {
                enabled: false
             },
        series: [{
            type: 'line',
            name: 'GOAL',
            data: [[0, 1.11], [5, 4.51]],
            
            marker: {
                enabled: false
            },
            states: {
                hover: {
                    lineWidth: 0
                }
            },
            enableMouseTracking: false
        }, {
            type: 'scatter',
            name: 'ACTUAL',
            data: [1, 1.5, 2.8, 3.5, 3.9, 4.2],
            marker: {
                radius: 4
            }
        }]
    });
 }
}
