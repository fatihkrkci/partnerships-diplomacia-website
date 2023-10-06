import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { QuoteComponent } from './components/quote/quote.component';
import { VenueComponent } from './components/venue/venue.component';
import { FooterComponent } from './components/footer/footer.component';
import { TeamMembersComponent } from './components/team-members/team-members.component';
import { CardComponent } from './components/team-members/card/card.component';
import { ApplyComponent } from './components/apply/apply.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutUsComponent,
    ScheduleComponent,
    QuoteComponent,
    VenueComponent,
    FooterComponent,
    TeamMembersComponent,
    CardComponent,
    ApplyComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
