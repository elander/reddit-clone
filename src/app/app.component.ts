import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import {Article} from './article/article.model';
import { Component } from '@angular/core';

interface myLink {
  title: string,
  link: string
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myForm: FormGroup;
  title = 'reddit-clone';
  articles: Article[] = [] as Article[];

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      'title': new FormControl('',[Validators.required]),
      'link': new FormControl('', [Validators.required]),
    })
    this.articles = [
      new Article('Angular', 'http://angular.io', 3),
      new Article('Fullstack', 'http://fullstack.io', 2),
      new Article('Angular Homepage', 'http://angular.io', 1)
    ] as Article[];
  }
  
  addArticle(value: myLink) {
    this.articles.push( new Article(value.title, value.link));
  }

  sortedArticles(): Article[] {
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }
}
