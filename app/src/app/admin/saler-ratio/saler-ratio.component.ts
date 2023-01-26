import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { Sale, TopSelling } from './saler';

@Component({
  selector: 'app-saler-ratio',
  templateUrl: './saler-ratio.component.html',
  styleUrls: ['./saler-ratio.component.scss']
})
export class SalerRatioComponent implements OnInit {
  topSelling: Sale[];
  constructor() {

    this.topSelling = TopSelling;
    console.log(this.topSelling);

  }

  chartOptions = {
    title: {
      text: "Monthly Sales Data"
    },
    theme: "light2",
    animationEnabled: true,
    exportEnabled: true,
    axisY: {
      includeZero: true,
      valueFormatString: "$#,##0k"
    },
    data: [{
      type: "column", //change type to bar, line, area, pie, etc
      yValueFormatString: "$#,##0k",
      color: "#01b8aa",
      dataPoints: [
        { label: "Jan", y: 172 },
        { label: "Feb", y: 189 },
        { label: "Mar", y: 201 },
        { label: "Apr", y: 240 },
        { label: "May", y: 166 },
        { label: "Jun", y: 196 },
        { label: "Jul", y: 218 },
        { label: "Aug", y: 167 },
        { label: "Sep", y: 175 },
        { label: "Oct", y: 152 },
        { label: "Nov", y: 156 },
        { label: "Dec", y: 164 }
      ]
    }]
  }

  ngOnInit(): void {
  }
}
