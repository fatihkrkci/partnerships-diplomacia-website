import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { VenueComponent } from './components/venue/venue.component';
import { TeamMembersComponent } from './components/team-members/team-members.component';
import { HomeComponent } from './components/home/home.component';
import { ApplyComponent } from './components/apply/apply.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {path: 'team-members', component: TeamMembersComponent},
  {path: 'apply', component: ApplyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
