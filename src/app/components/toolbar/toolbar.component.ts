import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UiService } from "../../services/ui.service";


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  @Output() onButtonSidenavClick: EventEmitter<any> = new EventEmitter()
  constructor(private uiService: UiService) { }

  ngOnInit(): void {
  }

  openSideNav(){
    this.onButtonSidenavClick.emit()
  }

}
