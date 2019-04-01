import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  host: {
    '(document:click)': 'handleClick($event)'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  name = 'Angular component design';

  constructor(
    private changeDetector: ChangeDetectorRef
  ){}

  handleClick(_event: any) {
    //console.log('here');
  }
}
