import { Component, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  showLeftArrow = false;
  showRightArrow = true;

  @ViewChild('slides', { static: true }) slides: IonSlides;

  constructor(public router: Router) {}

  onSlideChange() {
    this.slides.getActiveIndex().then(index => {
      this.showLeftArrow = true;
      this.showRightArrow = true;
      if (index == 0) {
        this.showLeftArrow = false;
      }
      if (index == 5) {
        this.showRightArrow = false;
      }
    })
  }

  onLeftClick() {
    this.slides.slidePrev();
  }

  onRightClick() {
    this.slides.slideNext();
  }

  onContinueClick() {
    this.router.navigateByUrl('/signup');
  }

}
