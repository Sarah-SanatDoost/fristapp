import { Component, Input, OnInit, Output ,EventEmitter} from '@angular/core';
import { CardMenuComponent } from 'src/app/display-mode/card-menu/card-menu.component';
// import { Router } from '@angular/router';

@Component({
  selector: 'app-card-tool-bar',
  templateUrl: './card-tool-bar.component.html',
  styleUrls: ['./card-tool-bar.component.css']
})
export class CardToolBarComponent implements OnInit {

  @Input() IsCard : boolean = true;
  @Input() IsList : boolean =false;

  @Output() btnClick = new EventEmitter()


  constructor() { }


  public onList() {
    this.btnClick.emit();
  }
  
  ngOnInit(): void {
  }

}
