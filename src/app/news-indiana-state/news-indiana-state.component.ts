import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-indiana-state',
  templateUrl: './news-indiana-state.component.html',
  styleUrls: ['./news-indiana-state.component.css']
})
export class NewsIndianaStateComponent implements OnInit {

 	feedId: string;
	
	constructor() { }

	ngOnInit() {
		this.feedId = "nwitimes-indiana";
	}


}
