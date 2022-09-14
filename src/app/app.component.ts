import { Component , HostListener} from '@angular/core';
import { BreakpointsService } from './services/breakpoints/breakpoints.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firstapp';

  constructor(public breakpoints : BreakpointsService) { }

  ngOnInit(): void {
  
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (window.innerWidth < 768) {
      this.breakpoints.IsMobileSize = true;
    } else {
      this.breakpoints.IsMobileSize = false;
    }
  }
}
