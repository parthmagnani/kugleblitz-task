import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { navigation } from 'src/app/shared/utils/navigation';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @ViewChild('snav') sidenav!: MatSidenav;
  // mobileQuery: MediaQueryList;
  navigationList = navigation


  toggle() {
    console.log("clicked")
    this.sidenav.toggle();
  }
}
