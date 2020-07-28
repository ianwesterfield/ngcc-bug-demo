import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgccTestLibraryModule } from 'ngcc-test-library';
import { NgccTestSecondaryModule } from 'ngcc-test-library/ngcc-test-secondary';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgccTestLibraryModule,
    NgccTestSecondaryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
