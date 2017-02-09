import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule, Routes } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common'; 

import { ArticleService } from './services/article.service';
import { TimeAgoPipe } from './pipes/time-ago.pipe';

import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { AboutComponent } from './about/about.component';
import { NewsLatestComponent } from './news-latest/news-latest.component';
import { NewsLakeCountyComponent } from './news-lake-county/news-lake-county.component';
import { NewsPorterCountyComponent } from './news-porter-county/news-porter-county.component';
import { NewsIllinoisStateComponent } from './news-illinois-state/news-illinois-state.component';
import { NewsIndianaStateComponent } from './news-indiana-state/news-indiana-state.component';
import { NewsNationalComponent } from './news-national/news-national.component';
import { NewsWorldComponent } from './news-world/news-world.component';


const routes: Routes = [
{ path: '', redirectTo: 'latest', pathMatch: 'full' },
{ path: 'latest', component: NewsLatestComponent },
{ path: 'lakeco', component: NewsLakeCountyComponent },
{ path: 'porterco', component: NewsPorterCountyComponent },
{ path: 'illinois', component: NewsIllinoisStateComponent },
{ path: 'indiana', component: NewsIndianaStateComponent },
{ path: 'national', component: NewsNationalComponent },
{ path: 'world', component: NewsWorldComponent },
{ path: 'about', component: AboutComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    ArticleListComponent,
    AboutComponent,
    NewsLatestComponent,
    NewsLakeCountyComponent,
    NewsPorterCountyComponent,
    NewsIllinoisStateComponent,
    NewsIndianaStateComponent,
    NewsNationalComponent,
    NewsWorldComponent,
	TimeAgoPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
	RouterModule.forRoot(routes)
  ],
	providers: [
		{ provide: LocationStrategy, useClass: HashLocationStrategy },
		{ provide: APP_BASE_HREF, useValue: './' },
		{ provide: ArticleService, useClass: ArticleService }
	],
  bootstrap: [AppComponent]
})
export class AppModule { }

	platformBrowserDynamic().bootstrapModule(AppModule)
		.catch((err: any) => console.error(err));