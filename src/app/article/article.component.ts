import { Component, OnInit } from '@angular/core';
import { Article } from '../services/article.model';

@Component({
  selector: 'app-article',
  inputs: ['article'],
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
	
	article: Article;
	
	constructor() { }

	ngOnInit() {}
	
	readArticle(){
		window.location.href=this.article.articleLink;
	}

}
