import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Configuration } from './configuration';


import { BookService } from './api/book.service';
import { Book } from './model/book';
import { Http } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports:      [ CommonModule, HttpClientModule, Http, BrowserModule ],
  declarations: [],
  exports:      [],
  providers: [
    BookService ]
})
export class ApiModule {
    public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders {
        return {
            ngModule: ApiModule,
            providers: [ { provide: Configuration, useFactory: configurationFactory } ]
        }
    }

    constructor( @Optional() @SkipSelf() parentModule: ApiModule) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import your base AppModule only.');
        }
    }
}
