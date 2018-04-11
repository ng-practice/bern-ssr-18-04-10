import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    // Add .withServerTransition() to support Universal rendering.
    // The application ID can be any identifier which is unique on
    // the page.
    BrowserModule.withServerTransition({ appId: 'bern-ssr' }),
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
