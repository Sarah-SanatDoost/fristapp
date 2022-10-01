import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { CardMenuComponent } from 'src/app/display-mode/card-menu/card-menu.component';
// import { Router } from '@angular/router';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';
import { periodicEelement } from 'src/app/menu/interface/periodicElement';
import { BreakpointsService } from 'src/app/services/breakpoints/breakpoints.service';
import { CardCheckboxSelectedService } from 'src/app/services/card-checkbox-selected.service';
import { SideNavService } from 'src/app/side-nav.service';


const elements: periodicEelement[] = [
  { imageUrl: "https://material.angular.io/assets/img/examples/shiba2.jpg", name: 'چیستا محمدی', active: true, id: 10256, roles: ['مدیر', 'کاربر'], date: '1400/12/01', email: 'maggi45@gmail.com', lastActivity: 'امروز - 10:23' },
    { imageUrl: "https://material.angular.io/assets/img/examples/shiba2.jpg", name: 'شهرود اشتری', active: true, id: 10257, roles: ['کاربر'], date: '1400/12/01', email: 'maggi45@gmail.com', lastActivity: 'امروز - 10:23' },
    { imageUrl: "https://material.angular.io/assets/img/examples/shiba2.jpg", name: 'چیستا محمدی', active: false, id: 10258, roles: ['حسابدار'], date: '1400/12/01', email: 'maggi45@gmail.com', lastActivity: 'امروز - 10:23' },
    { imageUrl: "https://material.angular.io/assets/img/examples/shiba2.jpg", name: 'چیستا محمدی', active: false, id: 10259, roles: ['مسئول انبار'], date: '1400/12/01', email: 'maggi45@gmail.com', lastActivity: 'امروز - 10:23' },
    { imageUrl: "https://material.angular.io/assets/img/examples/shiba2.jpg", name: 'چیستا محمدی', active: false, id: 10260, roles: ['حسابدار'], date: '1400/12/01', email: 'maggi45@gmail.com', lastActivity: 'امروز - 10:23' },
    { imageUrl: "https://material.angular.io/assets/img/examples/shiba2.jpg", name: 'چیستا محمدی', active: false, id: 10261, roles: ['حسابدار'], date: '1400/12/01', email: 'maggi45@gmail.com', lastActivity: 'امروز - 10:23' },
    { imageUrl: "https://material.angular.io/assets/img/examples/shiba2.jpg", name: 'چیستا محمدی', active: false, id: 10262, roles: ['حسابدار'], date: '1400/12/01', email: 'maggi45@gmail.com', lastActivity: 'امروز - 10:23' },
    { imageUrl: "https://material.angular.io/assets/img/examples/shiba2.jpg", name: 'چیستا محمدی', active: false, id: 10263, roles: ['حسابدار'], date: '1400/12/01', email: 'maggi45@gmail.com', lastActivity: 'امروز - 10:23' },
    { imageUrl: "https://material.angular.io/assets/img/examples/shiba2.jpg", name: 'چیستا محمدی', active: false, id: 10264, roles: ['حسابدار'], date: '1400/12/01', email: 'maggi45@gmail.com', lastActivity: 'امروز - 10:23' },
]

@Component({
  selector: 'app-card-tool-bar',
  templateUrl: './card-tool-bar.component.html',
  styleUrls: ['./card-tool-bar.component.css']
})


export class CardToolBarComponent implements OnInit {
  showFiller = false;
  @Input() IsCard: boolean = true;
  @Input() IsList: boolean = false;
  @Output() allCheckboxSelected = new EventEmitter();
  @Input() isChecked: boolean = false;
  @Output() btnClick = new EventEmitter()
  IsNotEmpty: boolean = false;

  dataSource = new MatTableDataSource<periodicEelement>(elements);
  selection = new SelectionModel<periodicEelement>(true, []);

  constructor(
    public breakpoints: BreakpointsService,
    public checkboxSelectedService: CardCheckboxSelectedService,
    public sidenav: SideNavService) { }


  public onList() {
    this.btnClick.emit();
  }


  ngOnInit(): void {
  }

  public onCheckboxClicked(e: any) {
    this.isChecked = e.checked;
    this.allCheckboxSelected.emit(this.isChecked);
  }



  public isAllSelected(): boolean {

    const numSelected = this.checkboxSelectedService.checkboxSelected.length;
    const numCards = elements.length;
   
    if(numSelected === numCards){
      return true;
    }
    return false;
  }

 

  // public someComplete(index: number): boolean {
  //   let i = this.checkboxSelectedService.checkboxSelected.indexOf(index)
  //   if (!this.isAllSelected && this.checkboxSelectedService.checkboxSelected.includes(i)) {
  //     return true;
  //   }
  //   return false;

  // }

  // public setAll(completed: boolean) {
  //   this.allComplete = completed;
  //   if (this.task.subtasks == null) {
  //     return;
  //   }
  //   this.task.subtasks.forEach(t => (t.completed = completed));
  // }



 

//   public notEmpty() {

//  const empty = this.checkboxSelectedService.checkboxSelected.length === 0;
//   }

}
