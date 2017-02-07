import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-illinois-state',
  templateUrl: './news-illinois-state.component.html',
  styleUrls: ['./news-illinois-state.component.css']
})
export class NewsIllinoisStateComponent implements OnInit {
	feedId: string;
	
	constructor() { }

	ngOnInit() {
		this.feedId = "nwitimes-illinois";
	}

}
