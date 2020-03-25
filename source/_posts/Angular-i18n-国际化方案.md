---
title: Angular i18n 国际化方案
date: 2020-03-25 15:55:35
tags:
---
## 安装ngx-translate

```bash
    npm install @ngx-translate/core --save
    npm install @ngx-translate/http-loader  --save
```

如果使用旧版本的angular，请参考 https://github.com/ngx-translate/core 安装适合自己项目的版本

## 引入ngx-translate

### 在app.module.ts引入

```javascript
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';

    import { AppRoutingModule } from './app-routing.module';
    import { AppComponent } from './app.component';

    //引入 ngx-translate
    import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
    import { TranslateHttpLoader } from '@ngx-translate/http-loader';

    @NgModule({
      declarations: [AppComponent],
      imports: [
        BrowserModule,
        AppRoutingModule

        //引入 ngx-translate
        TranslateModule.forRoot({
              loader: {
                provide: TranslateLoader,
                useFactory: httpTranslateLoader,
                deps: [HttpClient]
              }
        })
    ],
    providers: [],
    bootstrap: [AppComponent]
    })
    export class AppModule { }

    //引入 ngx-translate
    export function httpTranslateLoader(http: HttpClient) {
        return new TranslateHttpLoader(http);
    }
```

### 在app.component.ts中使用

```javascript
    import { Component } from '@angular/core';

    import { TranslateService } from '@ngx-translate/core';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.scss']
    })

    export class AppComponent {
        title = 'demo';
        constructor(
            public translate: TranslateService
        )
        translate.addLangs(['en', 'zh']);
        const browserLang = this.translate.getBrowserLang();
        translate.setDefaultLang('en');
        if (browserLang == 'zh'){
            translate.setDefaultLang('zh');
        }
    }
```

### 创建对应的语言的json

在assets/目录下创建i18n文件夹，创建en.json和zh.json
en.json

```json
{
    "Name":"name"
}
```

zh.json

```json
{
    "Name":"姓名"
}
```

## 在html中使用

```html
<h1>{{'Name'|translate}}</h1>
```

对应的ts文件中

```javascript
import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  
  constructor(
    public translate: TranslateService,
  ) { }

  ngOnInit(): void {}

}
```

## 在组件中使用

```html
<ion-input [placeholder]="'Name'|translate: lang.get()" [(ngModel)]="name"></ion-input>
```

对应的ts文件中

```javascript
import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LangService } from '../services/';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  
  constructor(
    public translate: TranslateService,
    private lang:LangService,
  ) { }

  ngOnInit(): void {}

}
```

lang.service.ts

```javascript
import { Injectable } from '@angular/core';
import { TranslateCompiler } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LangService {
  private _currentLang = ''; 
  constructor() { }

  public get(): string {
    let lang = this._currentLang 
    return lang;
  }
}
```

## 在ts中使用

```javascript
this.translate.get("Name").subscribe((res: string) => {
    const toast = this._toast.success(res, 3000,)
});
```
