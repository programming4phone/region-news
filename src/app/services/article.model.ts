export class Article{

	title: string;
	author: string;
	description: string;
	pubDate: Date;
	articleLink: string;
	imageLink: string;

	constructor(
		title: string,
		author: string,
		description: string,
		pubDate: Date,
		articleLink: string,
		imageLink: string){
			this.title = title;
			this.author = author;
			this.description = description;
			this.pubDate = pubDate;
			this.articleLink = articleLink;
			this.imageLink = imageLink;
	}
}