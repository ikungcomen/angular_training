import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { ErrorComponentComponent } from './error-component/error-component.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemperatureConverterPipe } from './temp-converter.pipe';
import { MyservicesComponent } from './myservices/myservices.component';
import { ProductService } from './product.service';
import { HttpdataComponent } from './httpdata/httpdata.component';
import { CareerComponent } from './career/career.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    CareerComponent,
    ContactUsComponent,
    OurTeamComponent,
    ErrorComponentComponent,
    TemperatureConverterPipe,
    MyservicesComponent,
    HttpdataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
