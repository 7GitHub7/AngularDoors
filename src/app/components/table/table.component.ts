import { Component, OnInit } from '@angular/core';
import { RequiermentService } from "../../services/requirement.service";
import { Requiremnt } from "../../Requiremnt";
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  requirments:Requiremnt[] = [];
  displayedColumns: string[] = ['id', 'description', 'createdBy', 'email','requirementDescription','created','reviewStatus','comment'];
  // displayedColumns: string[] = ['id', 'description'];

  constructor(private requirementService: RequiermentService) { }

  ngOnInit(): void {
     this.requirementService.getTasks().subscribe((requirments)=>{this.requirments = requirments; console.log(this.requirments);});
    
     
  }
}
