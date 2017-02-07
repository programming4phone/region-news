import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-lake-county',
  templateUrl: './news-lake-county.component.html',
  styleUrls: ['./news-lake-county.component.css']
})
export class NewsLakeCountyComponent implements OnInit {

 	feedId: string;
	
	constructor() { }

	ngOnInit() {
		this.feedId = "nwitimes-lake";
	}

}
