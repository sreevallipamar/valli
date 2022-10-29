import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RedwelvetComponent } from './redwelvet/redwelvet.component';
import { PlumcakeComponent } from './plumcake/plumcake.component';
import { BlackforestComponent } from './blackforest/blackforest.component';
import { CupcakeComponent } from './cupcake/cupcake.component';
import { OrdernowComponent } from './ordernow/ordernow.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';

@NgModule({
  declarations: [
    AppComponent,
    RedwelvetComponent,
    PlumcakeComponent,
    BlackforestComponent,
    CupcakeComponent,
    OrdernowComponent,
    AboutusComponent,
    ContactusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
