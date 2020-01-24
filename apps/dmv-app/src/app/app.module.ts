import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DmvModule } from './dmv-module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, DmvModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
