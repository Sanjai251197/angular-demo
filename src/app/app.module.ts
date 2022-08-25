import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AccountsModule } from './accounts/accounts.module';

import { AppComponent } from './app.component';
import { OutputComponent } from './output/output.component';

@NgModule({
  declarations: [AppComponent, OutputComponent],
  imports: [BrowserModule,AccountsModule, HttpClientModule],
  bootstrap: [AppComponent],
})
export class AppModule {}