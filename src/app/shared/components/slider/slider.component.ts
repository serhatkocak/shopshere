import { Component, Input } from '@angular/core';
import { ISlider } from '../../models/slider.model';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {

  @Input() sliderList: ISlider[] = []

  constructor() {
  }

}
