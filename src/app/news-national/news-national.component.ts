import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-national',
  templateUrl: './news-national.component.html',
  styleUrls: ['./news-national.component.css']
})
export class NewsNationalComponent implements OnInit {

 	feedId: string;
	
	constructor() { }

	ngOnInit() {
		this.feedId = "nwitimes-national";
	}

}
