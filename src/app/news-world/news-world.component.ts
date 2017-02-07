import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-world',
  templateUrl: './news-world.component.html',
  styleUrls: ['./news-world.component.css']
})
export class NewsWorldComponent implements OnInit {

 	feedId: string;
	
	constructor() { }

	ngOnInit() {
		this.feedId = "nwitimes-world";
	}

}
