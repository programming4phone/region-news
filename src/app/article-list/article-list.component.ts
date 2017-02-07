import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../services/article.service';
import { Article } from '../services/article.model';
@Component({
  selector: 'app-article-list',
  inputs: ['feedId'],
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

	feedId : string;
	loading: boolean;
	articles: Article[];
	
	constructor(private articleService: ArticleService) {}

	ngOnInit() {
	
		this.loading = true;
		this.articleService.getArticles(this.feedId).subscribe(
				(results: Article[]) => { // on sucesss
					this.articles = results;
				},
				(err: any) => { // on error
					console.log(err);
					this.loading = false;
				},
				() => { // on completion
					this.loading = false;
				}
		);
	}

}
