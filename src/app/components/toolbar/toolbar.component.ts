import { Component, OnInit } from '@angular/core';
import { UiService } from "../../services/ui.service";


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor(private uiService: UiService) { }

  ngOnInit(): void {
  }

  openSideNav(){
    this.uiService.openSideNav();
  }

}
