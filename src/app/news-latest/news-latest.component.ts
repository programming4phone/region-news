import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-latest',
  templateUrl: './news-latest.component.html',
  styleUrls: ['./news-latest.component.css']
})
export class NewsLatestComponent implements OnInit {
	feedId: string;
	
	constructor() { }

	ngOnInit() {
		this.feedId = "nwitimes-latest";
	}

}
