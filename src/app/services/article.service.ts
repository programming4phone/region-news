import {Injectable} from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Article } from './article.model';

const ARTICLE_COLLECTION_URL: string = "https://rss-collector-001.herokuapp.com/rssAsJson/";

@Injectable()
export class ArticleService{

	data: Article;
	
	constructor(private http: Http) {}
	
	getArticles(feedId: string): Observable<Article[]> {
		let queryUrl = `${ARTICLE_COLLECTION_URL}${feedId}`;
		return this.http.get(queryUrl)
			.map(this.extractData)
			.catch(this.handleError);
	}
	
	private extractData(res: Response) {
		/*
			Be careful here. The JSON returned is an array of objects
		*/
		return (<any>res.json())
			.map(item => {
				console.log("raw item", item); // uncomment if you want to debug
				return new Article(
					item.title,
					item.author,
					item.description,
					item.pubDate,
					item.articleLink,
					item.imageLink
				);
			});
	}

	/*
	* Handle error extracting data from the response body
	*/
	private handleError (error: Response | any) {
		let errStatus: number;
		if (error instanceof Response) {
			errStatus = error.status;
		} 
		else {
			errStatus = 500; // assumes server error
		}
		return Observable.throw(errStatus);
	}
}