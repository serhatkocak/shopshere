import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {

  @Input() sliderContent: any

  constructor() {
  }

  ngOnInit() {
    console.log(this.sliderContent)
  }
}
