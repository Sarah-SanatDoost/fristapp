import { Component, Input, OnInit, Output } from '@angular/core';
import { CardMenuComponent } from 'src/app/display-mode/card-menu/card-menu.component';
// import { Router } from '@angular/router';

@Component({
  selector: 'app-card-tool-bar',
  templateUrl: './card-tool-bar.component.html',
  styleUrls: ['./card-tool-bar.component.css']
})
export class CardToolBarComponent implements OnInit {

  constructor() { }


  @Output() onList() {
// this.router.navigateByUrl('/list');

// Islist = true;
// Iscard= false;
  }



// Iscard: boolean = true
// switchCard : any = CardMenuComponent

  // public cardOrList(){
    
  //   if card
  // }


  ngOnInit(): void {
  }

}
