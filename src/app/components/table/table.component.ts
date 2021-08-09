import { Component, OnInit } from '@angular/core';
import { RequiermentService } from "../../services/requirement.service";
import { Requiremnt } from "../../Requiremnt";
import { MatTableDataSource } from "@angular/material/table";
import { Observable, merge, combineLatest, of } from "rxjs";
import { FormGroup, FormControl, AbstractControl } from "@angular/forms";

class Todo {
  id: string;
  description: string;
  complete: boolean;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  requirments: Requiremnt[] = [];
  // displayedColumns: string[] = ['id', 'description', 'createdBy', 'email', 'requirementDescription', 'created', 'reviewStatus', 'comment'];

  form: FormGroup = new FormGroup({
    id: new FormControl(false),
    description: new FormControl(false),
    createdBy: new FormControl(false),
    email: new FormControl(false),
    requirementDescription: new FormControl(false),
    created: new FormControl(false)
  });

  

  constructor(private requirementService: RequiermentService) {
    const todos: Todo[] = [
      { id: "123", description: "Complete me!", complete: false }
    ];


  }
  id = this.form.get("id");
  description = this.form.get("description");
  createdBy = this.form.get("createdBy");
  email = this.form.get("email");
  requirementDescription = this.form.get("requirementDescription");
  created = this.form.get("created");
  reviewStatus = this.form.get("reviewStatus");
  comment = this.form.get("comment");
  
  columnDefinitions = [
    { def: "id", label: "id", cb: this.id },
    { def: "description", label: "description", cb: this.description },
    { def: "createdBy", label: "createdBy", cb: this.createdBy},
    { def: "email", label: "email", cb: this.email },
    { def: "requirementDescription", label: "requirementDescription", cb: this.requirementDescription },
    { def: "created", label: "created", cb: this.created },
    { def: "comment", label: "comment", cb: this.comment },
    { def: "reviewStatus", label: "reviewStatus", cb: this.reviewStatus},
    
  ];
  displayedColumns$: Observable<string[]> = of(this.columnDefinitions.map(c => c.def))
  dataSource: MatTableDataSource<Requiremnt>;

  ngOnInit(): void {
    this.requirementService.getTasks().subscribe((requirments) => {

      this.requirments = requirments;
      this.dataSource = new MatTableDataSource(this.requirments);

    });

  }
}
