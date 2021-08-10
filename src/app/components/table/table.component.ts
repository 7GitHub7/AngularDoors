import { Component, OnInit, ViewChild } from '@angular/core';
import { RequiermentService } from "../../services/requirement.service";
import { Requiremnt } from "../../Requiremnt";
import { MatPaginator } from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;



  // requirments: MatTableDataSource[] = [];
  requirments
  displayedColumns: string[] = ['id', 'description', 'createdBy', 'email', 'requirementDescription', 'created', 'reviewStatus', 'comment'];
  // displayedColumns: string[] = ['id', 'description'];

  constructor(private requirementService: RequiermentService) { }

  ngOnInit(): void {
    this.requirementService.getTasks().subscribe((requirments) => {
      this.requirments =  new MatTableDataSource<Requiremnt>(requirments);
      this.requirments.paginator = this.paginator;
      console.log(this.requirments);

    });


  }
}
