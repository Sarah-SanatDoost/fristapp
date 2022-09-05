import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDividerModule} from '@angular/material/divider';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardsComponent } from './display-mode/card-menu/cards/cards.component';
import { TopHeaderComponent } from './menu/top-header/top-header.component';
import { HeaderMenuComponent } from './menu/header-menu/header-menu.component';
import { SubMenuComponent } from './menu/sub-menu/sub-menu.component';
import { PanelComponent } from './menu/panel/panel.component';
import { CardToolBarComponent } from './display-mode/card-menu/card-tool-bar/card-tool-bar.component';
import { ListComponent } from './display-mode/list/list.component';
import { CardMenuComponent } from './display-mode/card-menu/card-menu.component';
import { DisplayModeComponent } from './display-mode/display-mode.component';
import { ListToolBarComponent } from './display-mode/list/list-tool-bar/list-tool-bar.component';
import {MatSelectModule} from '@angular/material/select';
import { UserSearchBoxComponent } from './display-mode/user-search-box/user-search-box.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CardsComponent,
    TopHeaderComponent,
    HeaderMenuComponent,
    SubMenuComponent,
    PanelComponent,
    CardToolBarComponent,
    ListComponent,
    CardMenuComponent,
    DisplayModeComponent,
    ListToolBarComponent,
    UserSearchBoxComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatMenuModule,
    MatTabsModule,
    MatDividerModule,
    MatCheckboxModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
