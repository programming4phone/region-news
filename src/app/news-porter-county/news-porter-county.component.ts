import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-porter-county',
  templateUrl: './news-porter-county.component.html',
  styleUrls: ['./news-porter-county.component.css']
})
export class NewsPorterCountyComponent implements OnInit {

 	feedId: string;
	
	constructor() { }

	ngOnInit() {
		this.feedId = "nwitimes-porter";
	}

}
