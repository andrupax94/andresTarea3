import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponentComponent } from './user-component/user-component.component';
import { AdminComponentComponent } from './admin-component/admin-component.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponentComponent,
    AdminComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  hola:string="hodla"
 }
