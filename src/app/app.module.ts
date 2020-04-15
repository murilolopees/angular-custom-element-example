import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { SimpleCardComponent } from './simple-card/simple-card.component';
import { createCustomElement } from '@angular/elements';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    SimpleCardComponent,
    AppComponent,
  ],
  imports: [
    BrowserModule
  ],
  entryComponents: [
    SimpleCardComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {

  constructor(private injector: Injector) {
    const el = createCustomElement(
      SimpleCardComponent,
      {
        injector: this.injector
      }
    );
    customElements.define('simple-card', el);
  }

  ngDoBootstrap() {}
}
