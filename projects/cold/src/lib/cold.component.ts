import { Component } from '@angular/core';
import { ColdService } from './cold.service';

@Component({
  selector: 'lib-cold',
  template: `
    <p>
      cold works!

      <!-- {{this.userData | jsonFormat }} -->
    </p>

    <div *ngFor="let data of userData;">
     {{data}}  
    </div>
  `,
  styles: [
  ]
})
export class ColdComponent {

  userData: any;

  constructor(private coldService: ColdService) {}

  ngOnInit() {
    this.coldService.getData().subscribe((data) => {
      this.userData = data;

      console.log(data)
    });
  }

}
