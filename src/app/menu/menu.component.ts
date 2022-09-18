import { Component, OnInit } from '@angular/core';
import { BreakpointsService } from '../services/breakpoints/breakpoints.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

// export class CardMediaSizeExample {
//   longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
//   from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
//   originally bred for hunting.`;
// }
export class MenuComponent implements OnInit {

  constructor(public breakpoints: BreakpointsService) { }

  ngOnInit(): void {
  }

}
