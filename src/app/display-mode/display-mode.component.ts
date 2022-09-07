import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-mode',
  templateUrl: './display-mode.component.html',
  styleUrls: ['./display-mode.component.css']
})
export class DisplayModeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  IsCard: boolean = true;
  // Islist: boolean = false;


  public onList() {
 this.IsCard = false;
  }

}
