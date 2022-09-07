import { Component, OnInit ,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-tool-bar',
  templateUrl: './list-tool-bar.component.html',
  styleUrls: ['./list-tool-bar.component.css']
})
export class ListToolBarComponent implements OnInit {

@Input() IsCard: boolean = false;
@Input() IsList: boolean = true;

@Output() BtnClick = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

public onCard() {
  this.BtnClick.emit (this.IsCard === true && this.IsList === false)
}
}
