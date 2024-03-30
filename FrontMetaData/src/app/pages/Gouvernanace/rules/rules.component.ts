import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';
@Component({
  selector: 'app-chart',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.scss']
})
export class ChartComponent {
  title = 'angular-charts-youtube';


  lineChart=new Chart({
    chart: {
      type: 'line'
    },
    title: {
      text: 'Datas'
    },
    credits: {
      enabled: false
    },
    series: [
      {
        name: 'data Quality',
        data: [20, 0, 3,10,9,10,20,10,5,2,16]
      } as any
    ]

  })

  pieChart=new Chart({
    chart: {
      type: 'pie',
      plotShadow: false,
    },
  
    credits: {
      enabled: false,
    },
  
    plotOptions: {
      pie: {
        innerSize: '99%',
        borderWidth: 10,
        borderColor: '',
        slicedOffset: 10,
        dataLabels: {
          connectorWidth: 0,
        },
      },
    },
  
    title: {
      verticalAlign: 'middle',
      floating: true,
      text: 'Choix ',
    },
  
    legend: {
      enabled: false,
    },
  
    series: [
      {
        type: 'pie',
        data: [
          { name: 'good', y: 1, color: '#eeeeee' },
  
          { name: 'meduim', y: 2, color: '#393e46' },
  
          { name: 'bad', y: 3, color: '#00adb5' },
          //{ name: 'DISPORA', y: 4, color: '#eeeeee' },
         // { name: 'DIABETES', y: 5, color: '#506ef9' },
        ],
      },
    ],
  })
}


