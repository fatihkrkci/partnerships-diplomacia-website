import { Component } from '@angular/core';

@Component({
  selector: 'app-team-members',
  templateUrl: './team-members.component.html',
  styleUrls: ['./team-members.component.css']
})
export class TeamMembersComponent {
  ranaImage:string = '../../../assets/img/team-members/rana-ece.jpeg';
  hurImage:string = '../../../assets/img/team-members/hur-demirkan.jpg';
  ammarImage:string = '../../../assets/img/team-members/syed-muhammed.jpg';
  emirElhatipImage:string = '../../../assets/img/team-members/emir-elhatip.jpeg';
  boraAkarImage:string = '../../../assets/img/team-members/bora-akar.jpeg';
  batuhanAkyaziImage:string = '../../../assets/img/team-members/batuhan-akyazı.jpg';
  onurCigdemImage:string = '../../../assets/img/team-members/onur-cigdem.jpg';
  bahaOzyurtImage:string = '../../../assets/img/team-members/baha-ozyurt.jpeg';
}
