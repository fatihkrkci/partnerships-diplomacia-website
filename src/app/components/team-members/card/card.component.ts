import { Component, ElementRef, Input, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-card',
  template: `
    <div class="card-wrap"
      (mousemove)="handleMouseMove($event)"
      (mouseenter)="handleMouseEnter()"
      (mouseleave)="handleMouseLeave()"
      #cardRef>
      <div class="card"
        [ngStyle]="cardStyle">
        <div class="card-bg" [ngStyle]="cardBgTransform" [ngStyle]="cardBgImage"></div>
        <div class="card-info">
          <ng-content select="[slot=header]"></ng-content>
          <ng-content select="[slot=content]"></ng-content>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./card.component.css']
})

export class CardComponent implements AfterViewInit {
  @Input() dataImage: string = '';
  @ViewChild('cardRef', { static: false }) cardRef: ElementRef | undefined;
  width: number = 0;
  height: number = 0;
  mouseX: number = 0;
  mouseY: number = 0;
  mouseLeaveDelay: any = null;

  ngAfterViewInit() {
    this.width = this.cardRef?.nativeElement.offsetWidth || 0;
    this.height = this.cardRef?.nativeElement.offsetHeight || 0;
  }

  handleMouseMove(event: MouseEvent) {
    this.mouseX = event.pageX - this.cardRef?.nativeElement.offsetLeft - this.width / 2;
    this.mouseY = event.pageY - this.cardRef?.nativeElement.offsetTop - this.height / 2;
  }

  handleMouseEnter() {
    clearTimeout(this.mouseLeaveDelay);
  }

  handleMouseLeave() {
    this.mouseLeaveDelay = setTimeout(() => {
      this.mouseX = 0;
      this.mouseY = 0;
    }, 1000);
  }

  get mousePX() {
    return this.mouseX / this.width;
  }

  get mousePY() {
    return this.mouseY / this.height;
  }

  get cardStyle() {
    const rX = this.mousePX * 30;
    const rY = this.mousePY * -30;
    return {
      transform: `rotateY(${rX}deg) rotateX(${rY}deg)`
    };
  }

  get cardBgTransform() {
    const tX = this.mousePX * -40;
    const tY = this.mousePY * -40;
    return {
      transform: `translateX(${tX}px) translateY(${tY}px)`
    };
  }

  get cardBgImage() {
    return {
      'background-image': `url(${this.dataImage})`
    };
  }

  constructor() { }
}
