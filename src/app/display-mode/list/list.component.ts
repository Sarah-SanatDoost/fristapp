import { Component, OnInit , Input , Output , EventEmitter} from '@angular/core';
import { periodicEelement } from '../../menu/interface/periodicElement';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material/table';


const ELEMENT_DATA: periodicEelement[]= [
  {imageUrl: "https://material.angular.io/assets/img/examples/shiba2.jpg", name: 'چیستا محمدی', active: false , id: 100256, roles: ['مدیر', 'کاربر'] ,date: '1400/12/01' ,email:'maggi45@gmail.com' ,lastActivity:'امروز - 10:23'},
  {imageUrl: "https://material.angular.io/assets/img/examples/shiba2.jpg", name: 'چیستا محمدی', active: false , id: 100256, roles: ['حسابدار'] ,date: '1400/12/01' ,email:'maggi45@gmail.com' ,lastActivity:'امروز - 10:23'},
]



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  roleTitle = '';
  roleStyle = ''

  @Input() IsCard: boolean = false;
@Input() IsList: boolean = true;

@Output() BtnClick = new EventEmitter()
  constructor() { }

  public setRoleTitle(roleTitle: string) {
    console.log(roleTitle);
    if (roleTitle === 'مدیر') {
      this.roleStyle = 'manager';
    }
    else if (roleTitle === 'حسابدار') {
      this.roleStyle = 'accountant';
    }
    else if (roleTitle === 'کاربر') {
      this.roleStyle = 'user';
    }
    else if (roleTitle === 'مسئول انبار') {
      this.roleStyle = 'storekeeper'
    }
  }

  ngOnInit(): void {
  }

    displayedColumns: string[] = ['select','imageUrl' , 'name' , 'id' , 'role' , 'date' , 'email' , 'lastActivity'];
    dataSource = new MatTableDataSource<periodicEelement>(ELEMENT_DATA);
    selection = new SelectionModel<periodicEelement>(true, []);
  
    /** Whether the number of selected elements matches the total number of rows. */
    isAllSelected() {
      const numSelected = this.selection.selected.length;
      const numRows = this.dataSource.data.length;
      return numSelected === numRows;
    }
  
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    toggleAllRows() {
      if (this.isAllSelected()) {
        this.selection.clear();
        return;
      }
  
      this.selection.select(...this.dataSource.data);
    }
  
    /** The label for the checkbox on the passed row */
    checkboxLabel(row?: periodicEelement): string {
      if (!row) {
        return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
      }
      return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.imageUrl + 1}`;
    }
    
    public onCard() {
      this.BtnClick.emit ()
    }
  // dataSource= ELEMENT_DATA



  public onChange(){
    console.log('ssalam')
  }
  }


  
