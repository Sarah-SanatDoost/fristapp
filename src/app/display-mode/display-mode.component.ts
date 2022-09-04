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


  Iscard: boolean = true;
  Islist: boolean = false;
}
