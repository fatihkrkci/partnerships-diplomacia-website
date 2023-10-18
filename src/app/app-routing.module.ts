import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamMembersComponent } from './components/team-members/team-members.component';
import { HomeComponent } from './components/home/home.component';
import { ApplyComponent } from './components/apply/apply.component';
import { MockDebateComponent } from './components/mock-debate/mock-debate.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {path: 'team-members', component: TeamMembersComponent},
  {path: 'mock-debate', component: MockDebateComponent},
  {path: 'apply', component: ApplyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
