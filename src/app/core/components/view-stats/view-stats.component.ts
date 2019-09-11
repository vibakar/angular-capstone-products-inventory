import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

import { User } from '../../models/User';
import { Product } from '../../models/Product';
import { CoreService } from '../../services/core.service';

@Component({
  selector: 'view-stats',
  templateUrl: './view-stats.component.html',
  styleUrls: ['./view-stats.component.css']
})
export class ViewStatsComponent implements OnInit {
  barChartOptions: ChartOptions = {
    responsive: true,
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  barChartLabels: Label[] = [];
  barChartType: ChartType = 'bar';
  barChartLegend = false;
  barChartData: ChartDataSets[] = [
    { data: [] }
  ];
  products: Product[] = [];
  sortedProducts = [];
  user:User;
  selectedRange = "5";
  constructor(private coreService: CoreService) { }

  ngOnInit() {
  	let userId = sessionStorage.getItem("userId");
  	this.coreService.getAllProducts().subscribe((products: Product[])=>{
  		this.products = products;
  		this.coreService.getUserById(userId).subscribe((user: User) => {
  			this.user = user;
  			this.sortAndMapProducts();
  		});
  	});
  }

  sortAndMapProducts() {
	for (var productId in this.user.views) {
		let prodDetail = this.products.find((product) => product.id == parseInt(productId));
	    this.sortedProducts.push([prodDetail.name, this.user.views[productId]]);
	}
    this.sortedProducts.sort(function(a, b) {
	    return b[1] - a[1];
    });
    this.selectRange(5);
  }

  selectRange(range) {
  	this.barChartData[0].data = [];
  	this.barChartLabels = [];
  	let len = (range <= this.sortedProducts.length) ? range : this.sortedProducts.length;
  	for (var i = 0; i < len; i++) {
    	this.barChartData[0].data.push(this.sortedProducts[i][1]);
    	this.barChartLabels.push(this.sortedProducts[i][0]);
    }
  }
}